import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useQuery} from '@realm/react';

import {Title} from '../components/Title';
import {BillItem} from '../components/BillItem';
import {AddBillButton} from '../components/AddBillButton';
import {UserHeader} from '../components/UserHeader';

export function Home() {
  const bills = useQuery('Bill');

  return (
    <>
      <UserHeader />
      <View style={styles.content}>
        <AddBillButton />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
          data={bills}
          ListHeaderComponent={() => <Title>Contas do Mês</Title>}
          stickyHeaderIndices={[0]}
          renderItem={({item}) => <BillItem item={item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 32,
    paddingBottom: 0,
    gap: 32,
    flex: 1,
  },
  flatListContent: {
    gap: 12,
    paddingBottom: 32,
    flexGrow: 1,
    overflow: 'scroll',
  },
});
