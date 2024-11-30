import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useRealm} from '@realm/react';

import {OfflineIndicator} from '../components/OfflineIndicator';
import colors from '../consts/colors';
import {Bill as BillModel} from '../models/Bill';
import {Home} from '../screens/Home';
import {Bill} from '../screens/Bill';

type AppParamList = {
  Home: undefined;
  Bill: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<AppParamList, 'Home'>;
export type BillScreenProps = NativeStackScreenProps<AppParamList, 'Bill'>;

const Stack = createNativeStackNavigator<AppParamList>();

export function AppRoutes() {
  const realm = useRealm();

  useEffect(() => {
    realm.subscriptions.update(mutableSubs => {
      mutableSubs.add(realm.objects(BillModel));
    });
  }, [realm]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          header: OfflineIndicator,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bill" component={Bill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
