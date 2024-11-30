import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../consts/colors';

export function AddBillButton() {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigate('Bill')}>
      <View style={styles.iconContainer}>
        <Icon name='add'/>
      </View>
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>
          <Text style={styles.clickMessage}>
            Clique aqui para adicionar conta
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.secondary,
    padding: 22,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6, 
  },
  iconContainer: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: 6,
    padding: 10,
  },
  messageWrapper: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: colors.white,
    lineHeight: 22.4,
    fontWeight: '400',
  },
  clickMessage: {
    color: colors.primary,
    fontSize: 14,
    lineHeight: 22.4,
    fontWeight: '700',
  },
});
