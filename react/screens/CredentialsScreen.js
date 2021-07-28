import React, {useContext, useMemo} from 'react';
import CredentialsForm from '../components/Admin/CredentialsForm';
import {CredentialContext} from '../contexts/CredentialContext';
import {Text} from 'react-native';
import {Button, ActivityIndicator} from 'react-native-paper';

export default function Credentials() {
  const {token, logout, login} = useContext(CredentialContext);

  return (
    <>
      {token === undefined && <ActivityIndicator />}
      {token === null && (
        <CredentialsForm
          onSubmit={values => login(values.username, values.password)}
        />
      )}
      {token && (
        <Button mode="contained" onPress={logout}>
          Logout
        </Button>
      )}
      <Text>{token}</Text>
    </>
  );
}
