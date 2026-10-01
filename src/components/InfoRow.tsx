import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

interface InfoRowProps {
  label: string;
  value: string | null;
  /** When provided (and a value exists) the row becomes tappable. */
  onPress?: () => void;
}

export default function InfoRow({ label, value, onPress }: InfoRowProps) {
  const hasValue = Boolean(value && value.trim().length > 0);
  const displayValue = hasValue ? (value as string).trim() : 'Not available';
  const isLink = hasValue && Boolean(onPress);

  const content = (
    <>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[styles.value, !hasValue && styles.valueEmpty, isLink && styles.valueLink]}
        numberOfLines={2}
      >
        {displayValue}
      </Text>
    </>
  );

  if (isLink) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="link"
        style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={styles.row}>{content}</View>;
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 10,
    borderRadius: 8,
  },
  rowPressed: {
    backgroundColor: colors.background,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: 3,
  },
  value: {
    fontSize: 15,
    color: colors.text,
  },
  valueEmpty: {
    color: colors.textMuted,
    fontStyle: 'italic',
  },
  valueLink: {
    color: colors.primary,
    fontWeight: '600',
  },
});
