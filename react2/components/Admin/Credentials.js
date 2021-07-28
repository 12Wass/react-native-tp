import React, {useContext, useMemo} from 'react';
import CredentialsForm from './CredentialsForm';
import {CredentialContext} from '../../contexts/CredentialContext';

export default function Credentials() {
  const {token, decodedCredentials, save} = useContext(CredentialContext);

  const precalclatedP = useMemo(() => {
    return <p>{decodedCredentials.clientID}</p>;
  }, [decodedCredentials.clientID]);

  return (
    <>
      <CredentialsForm
        onSubmit={values => save(values.clientId, values.clientSecret)}
        selectedValue={decodedCredentials}
      />
      {precalclatedP}
      <p>{token}</p>
    </>
  );
}
