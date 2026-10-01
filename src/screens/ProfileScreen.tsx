import React from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import InfoRow from '../components/InfoRow';
import SectionCard from '../components/SectionCard';
import StatCard from '../components/StatCard';
import type { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { formatCount, formatDate } from '../utils/format';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ route }: Props) {
  const { user } = route.params;

  const openProfileUrl = () => {
    Linking.openURL(user.html_url).catch(() => {
      // Silently ignore: the URL is shown as text anyway.
    });
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image
          source={{ uri: user.avatar_url }}
          style={styles.avatar}
          accessibilityLabel={`${user.login} avatar`}
        />

        {user.name ? <Text style={styles.name}>{user.name}</Text> : null}
        <Text style={styles.login}>@{user.login}</Text>
        {user.bio ? <Text style={styles.bio}>{user.bio}</Text> : null}
      </View>

      <View style={styles.statsRow}>
        <StatCard value={formatCount(user.followers)} label="Followers" />
        <StatCard value={formatCount(user.following)} label="Following" />
        <StatCard value={formatCount(user.public_repos)} label="Repos" />
      </View>

      <SectionCard title="Details">
        <InfoRow label="Profile URL" value={user.html_url} onPress={openProfileUrl} />
        <InfoRow label="Location" value={user.location} />
        <InfoRow label="Company" value={user.company} />
        <InfoRow label="Website" value={user.blog} onPress={user.blog ? () => Linking.openURL(normalizeUrl(user.blog as string)).catch(() => undefined) : undefined} />
        <InfoRow label="Joined GitHub" value={formatDate(user.created_at)} />
      </SectionCard>
    </ScrollView>
  );
}

/** GitHub sometimes returns the website without a protocol. */
function normalizeUrl(url: string): string {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.surface,
    backgroundColor: colors.border,
  },
  name: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
  },
  login: {
    marginTop: 2,
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
  },
  bio: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 22,
  },
});
