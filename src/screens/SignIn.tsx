import React from 'react';
import {
  Alert,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useAuth} from '@realm/react';

import {Button} from '../components/Button';
import colors from '../consts/colors';

export function SignIn() {
  const {logInWithGoogle, result} = useAuth();

  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (userInfo.data?.idToken) {
        logInWithGoogle({idToken: userInfo.data.idToken});
      }
    } catch (error) {
      signInErrorHandler(error);
    }
  };

  const signInErrorHandler = (error: any) => {
    if (!error || !error?.code) {
      return;
    }

    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    } else if (error.code === statusCodes.IN_PROGRESS) {
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('Alerta', 'Google Play Services não disponível', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    } else {
      Alert.alert(
        'Alerta',
        error.message,
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Minhas Contas</Text>
        <Text style={styles.phrase}>Gestão de Contas</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          disabled={result.pending}
          onPress={() => {
            signInGoogle();
          }}>
          Entrar com Google
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 36,
    padding: 52,
    backgroundColor: colors.background
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonWrapper: {
    justifyContent: 'center'
  },
  title: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 44,
    textAlign: 'center',
  },
  phrase: {
    color: colors.white,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
});
