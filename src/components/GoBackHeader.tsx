import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../consts/colors';

type GoBackHeaderProps = {
  children: string;
};

export function GoBackHeader({children}: GoBackHeaderProps) {
  const {goBack} = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={colors.background} />
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon name='arrow-back' size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{children}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 28,
  },
  icon: {
    color: colors.primary,
  },
  title: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 20,
  },
});
