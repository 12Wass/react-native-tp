import React, {createContext, useState, useEffect} from 'react';
import base64 from 'react-native-base64';

const data = [
  {id: 1, name: 'plate', unitPrice: 1, quantity: 3},
  {id: 2, name: 'spoon', unitPrice: 1, quantity: 3},
];

export const CredentialContext = createContext();

export default function CredentialsProvider({children}) {
  const [credentials, setCredentials] = useState({
    clientID: '',
    clientSecret: '',
  });

  useEffect(() => {
    //const value = localStorage.getItem('credentials');
    //if (value) {
    //  setCredentials(JSON.parse(value));
    //}
  }, []);

  // token = base64("username:password")
  const token = base64.encode(
    `${credentials.clientID}:${credentials.clientSecret}`,
  );

  const save = async (clientID, clientSecret) => {
    localStorage.setItem(
      'credentials',
      JSON.stringify({clientID, clientSecret}),
    );
    setCredentials({clientID, clientSecret});
  };

  return (
    <CredentialContext.Provider
      value={{
        decodedCredentials: credentials,
        token,
        save,
      }}>
      {children}
    </CredentialContext.Provider>
  );
}
