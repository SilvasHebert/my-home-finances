import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useUser, useRealm } from '@realm/react';
import { BSON } from "realm";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../components/Button";
import { GoBackHeader } from "../components/GoBackHeader";
import { WrappedTextInput } from "../components/WrappedTextInput";

export function Bill() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [dueDay, setDueDay] = useState(new Date().getDate());

  const user = useUser()
  const realm = useRealm();
  const { goBack } = useNavigation();

  const handleBill = () => {
    const bill = {
      userId: new BSON.ObjectId(user.id),
      name: name,
      description: description,
      dueDay: Number(dueDay),
      value: Number(value),
      type: ''
    }

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
    } finally {
      goBack();
    }
  }

  return <>
    <GoBackHeader>Nova Conta</GoBackHeader>
    <View style={styles.wrapper}>
      <WrappedTextInput
        label="Nome"
        value={name}
        onChangeText={setName}
      />
      <WrappedTextInput
        label="Valor"
        value={value}
        onChangeText={setValue}
      />

      <WrappedTextInput
        label="Data de Vencimento"
        value={dueDay}
        onChangeText={setDueDay}
      />
      <WrappedTextInput
        value={description}
        onChangeText={setDescription}
        label="Descrição"
        placeholder=""
        maxLength={200}
        multiline
        numberOfLines={3}
      />
      <Button onPress={() => handleBill()}>Adicionar</Button>
    </View>
  </>
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 32,
    gap: 12
  }
})