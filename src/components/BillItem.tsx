import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


import colors from '../consts/colors';
import { useBill } from '../hooks/useBill';
import { BillType } from '../models/Bill';
import { Button } from './Button';

type BillItemProps = {
  item: BillType;
};

export function BillItem({ item }: BillItemProps) {
  if (!item) {
    return <></>;
  }

  const {payBill} = useBill()

  return (
    <View style={styles.wrapper}>
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <Text style={styles.value}>{item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
      <Text style={styles.date}>Data de Vencimento 22/11/2024</Text>
      <View style={styles.status}>
        <View style={styles.status}>
          <Icon name="timer" size={24} color={colors.error} />
          <Text style={styles.pending}>
            Pendente
          </Text>
        </View>
        <Button onPress={() => {payBill(item._id)}}>
            Pagar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.secondary,
    padding: 22,
    gap: 12,
    flexDirection: 'column',
    borderRadius: 4,
  },
  nameWrapper: {
    gap: 6,
  },
  name: {
    fontSize: 20,
    color: colors.white,
    lineHeight: 22.4,
    fontWeight: '700',
  },
  value: {
    fontSize: 22,
    color: colors.primary,
    lineHeight: 22.4,
    fontWeight: '700',
  },
  date: {
    color: colors.gray,
    fontSize: 14,
    lineHeight: 19.2,
  },
  status: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  pending: {
    color: colors.error,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
