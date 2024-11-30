import React from 'react';
import {StyleSheet, Text} from 'react-native';

import colors from '../consts/colors';

type TitleProps = {
  children: string;
};

export function Title({children}: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: colors.background,
    color: colors.gray,
    fontSize: 18,
    lineHeight: 22.6,
    fontWeight: '700',
  },
});
