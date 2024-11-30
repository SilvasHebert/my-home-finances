import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
} from 'react-native';

import colors from '../consts/colors';

type WrappedTextInputProps = TextInputProps & {
  label?: string;
};

export function WrappedTextInput({label, ...props}: WrappedTextInputProps) {
  return (
    <KeyboardAvoidingView style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor={colors.icon}
        {...props}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.secondary,
    borderRadius: 6,
    padding: 12,
  },
  label: {
    color: colors.gray,
    fontSize: 16,
  },
  textInput: {
    backgroundColor: colors.secondary,
    color: colors.white,
    fontSize: 16,
    paddingLeft: 0,
  },
});
