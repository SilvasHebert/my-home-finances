import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AppProvider, RealmProvider, UserProvider} from '@realm/react';
import {OpenRealmBehaviorType} from 'realm';

import 'react-native-gesture-handler';

import {GoogleClientId, RealmAppId} from './src/consts/tokens';
import {Bill} from './src/models/Bill';
import {AppRoutes} from './src/routes/app.routes';
import {AuthRoutes} from './src/routes/auth.routes';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();

    GoogleSignin.configure({
      webClientId: GoogleClientId,
      offlineAccess: true,
    });
  }, []);

  return (
    <AppProvider id={RealmAppId}>
      <UserProvider fallback={<AuthRoutes />}>
        <RealmProvider
          schema={[Bill]}
          sync={{
            flexible: true,
            onError: (_session, error) => {
              console.log(error);
            },
            newRealmFileBehavior: {
              type: OpenRealmBehaviorType.DownloadBeforeOpen,
            },
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
            },
          }}>
            <AppRoutes />
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}

export default App;
