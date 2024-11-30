import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import colors from '../consts/colors';

type Button = TouchableOpacityProps & {
  onPress: () => void;
  children: string;
};

export function Button({onPress, children, ...props}: Button) {
  return (
    <TouchableOpacity style={styles.button} {...props} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    flexGrow: 1,
    backgroundColor: colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.gray,
  },
});
