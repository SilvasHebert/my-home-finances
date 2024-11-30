import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
// import { MaterialIcons } from "@expo/vector-icons";

import colors from '../consts/colors';

export function OfflineIndicator() {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (isConnected) {
    return <></>;
  }

  return (
    <View style={styles.toast}>
      <StatusBar backgroundColor={colors.toast} />
      {/* <MaterialIcons name='wifi-off'/> */}
      <Text style={styles.text}>Você está off-line</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.toast,
    gap: 6,
    padding: 6,
    top: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: colors.gray,
    lineHeight: 22.4,
    textAlign: 'center',
  },
});
