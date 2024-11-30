import { BSON } from 'realm';
import { Alert } from 'react-native';
import { useRealm } from '@realm/react';
import { useNavigation } from '@react-navigation/native';

import { BillType } from '../models/Bill';

type Bill = Omit<BillType, '_id' | 'paid'> & Partial<Pick<BillType, '_id'>>;

export function useBill() {
  const realm = useRealm();
  const {goBack} = useNavigation();

  const validadeBillData = () => { }

  const createBill = (bill: Bill) => {
    console.log(bill)
    try {
      realm.write(() => {
        realm.create('Bill', {
          _id: new BSON.ObjectId(),
          userId: bill.userId,
          name: bill.name,
          value: bill.value,
          description: bill.description,
          dueDay: bill.dueDay,
          type: 'expense',
          paid: false,
        })
      })
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Alerta',
        'Não foi possivel registrar a Saída, tente novamente',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
      );
    } finally {
      goBack();
    }
  }

  const payBill = (id: BillType['_id']) => {
    const bill = realm.objectForPrimaryKey('Bill', id);

    if(bill) {
      bill.paid = true;
    }
  }

  const updateBill = () => { }

  const deleteBill = () => { }

  return { validadeBillData, createBill, updateBill, deleteBill, payBill }
}