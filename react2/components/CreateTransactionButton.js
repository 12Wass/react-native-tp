import React, {useContext} from 'react';
import {CredentialContext} from '../contexts/CredentialContext';
import {ListContext} from '../contexts/ListContext';
import Button from './lib/Button';

export default function CreateTransactionButton() {
  const {list, totalPrice} = useContext(ListContext);
  const {token} = useContext(CredentialContext);

  const createTransaction = () => {
    const data = {
      cart: list,
      totalPrice,
      currency: 'EUR',
      consumer: {
        lastname: 'Foo',
        firstname: 'Bart',
      },
      shippingAddress: {
        address: '1 rue Bouvier',
        zipCode: 75011,
        city: 'Paris',
        country: 'France',
      },
      billingAddress: {
        address: '1 rue Bouvier',
        zipCode: 75011,
        city: 'Paris',
        country: 'France',
      },
    };

    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        Authorization: 'BASIC ' + token, // base64("username:password")
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <Button title="createTransaction" onClick={() => createTransaction()} />
  );
}
