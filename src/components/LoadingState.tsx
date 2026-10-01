import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({ message = 'Loading profile…' }: LoadingStateProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  message: {
    marginTop: 14,
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
