import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {login as alogin} from './actions/security';
import jwt_decode from 'jwt-decode';
import {Alert} from 'react-native';

export const CredentialContext = createContext();

export default function CredentialsProvider({children}) {
  const [token, setToken] = useState();
  const [profil, setProfil] = useState();

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('jwt_token').then(token => {
        setToken(token);
        if (token) setProfil(jwt_decode(token));
      });
    }, 5000);
  }, []);

  const login = async (username, password) => {
    console.log(username, password);
    alogin(username, password)
      .then(token =>
        AsyncStorage.setItem('jwt_token', token).then(() => {
          setToken(token);
          setProfil(jwt_decode(token));
        }),
      )
      .catch(err => Alert.alert(err.message));
  };

  const logout = async () => {
    AsyncStorage.removeItem('jwt_token').then(() => setToken(null));
  };

  return (
    <CredentialContext.Provider
      value={{
        token,
        profil,
        login,
        logout,
      }}>
      {children}
    </CredentialContext.Provider>
  );
}
