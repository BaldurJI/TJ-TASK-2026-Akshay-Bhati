import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import LoadingState from '../components/LoadingState';
import PrimaryButton from '../components/PrimaryButton';
import type { RootStackParamList } from '../navigation/types';
import { fetchGitHubUser } from '../services/githubApi';
import { colors } from '../theme/colors';
import { getErrorMessage } from '../utils/errors';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export default function SearchScreen({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChangeText = (text: string) => {
    setUsername(text);
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSearch = async () => {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      setErrorMessage('Please enter a GitHub username to search.');
      return;
    }

    Keyboard.dismiss();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const user = await fetchGitHubUser(trimmedUsername);
      navigation.navigate('Profile', { user });
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const renderResultArea = () => {
    if (isLoading) {
      return <LoadingState message={`Searching for "${username.trim()}"…`} />;
    }

    if (errorMessage) {
      return (
        <ErrorState
          message={errorMessage}
          onRetry={username.trim() ? handleSearch : undefined}
        />
      );
    }

    return <EmptyState />;
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <Text style={styles.title}>GitHub Profile Explorer</Text>
          <Text style={styles.subtitle}>
            Search any GitHub username to view their public profile.
          </Text>

          <TextInput
            style={styles.input}
            value={username}
            onChangeText={handleChangeText}
            placeholder="e.g. octocat"
            placeholderTextColor={colors.textMuted}
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
            editable={!isLoading}
            accessibilityLabel="GitHub username"
          />

          <View style={styles.buttonWrapper}>
            <PrimaryButton title="Search" onPress={handleSearch} loading={isLoading} />
          </View>

          <View style={styles.resultArea}>{renderResultArea()}</View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  input: {
    marginTop: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
  },
  buttonWrapper: {
    marginTop: 12,
  },
  resultArea: {
    flex: 1,
    justifyContent: 'center',
  },
});
