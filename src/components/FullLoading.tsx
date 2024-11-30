import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';

import colors from '../consts/colors';

export function FullLoading() {
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={colors.black + 'DD'} />
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.black + 'DD',
    zIndex: 9999,
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
