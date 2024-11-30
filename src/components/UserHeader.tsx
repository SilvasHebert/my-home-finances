import React, {useEffect, useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import {useAuth, useUser} from '@realm/react';

import colors from '../consts/colors';

import {FullLoading} from './FullLoading';

export function UserHeader() {
  const user = useUser();
  const {logOut: realmLogOut} = useAuth();

  const [loading, setLoading] = useState(false);

  const UserPhoto = GoogleSignin.getCurrentUser()?.user.photo;

  const logOut = async () => {
    setLoading(true);
    await GoogleSignin.signOut();
    realmLogOut();
    setLoading(false);
  };

  if (!user) {
    return <></>;
  }

  if (loading) {
    return <FullLoading />;
  }

  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={colors.secondary} />
      <View style={styles.userInfo}>
        {user.profile.photo ? (
          <Image
            source={{
              uri: UserPhoto ?? undefined,
            }}
            style={styles.userPhoto}
          />
        ) : (
          <></>
        )}

        <View>
          <Text style={styles.hello}>Olá,</Text>
          <Text style={styles.name}>{user.profile.name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => logOut()}>
        <Icon name="logout" color={colors.icon} size={32} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.secondary,
    width: '100%',
    padding: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    gap: 16,
  },
  userPhoto: {
    height: 54,
    width: 54,
    borderRadius: 7,
  },
  hello: {
    color: colors.white,
    fontSize: 18,
  },
  name: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '700',
  },
});
