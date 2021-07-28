import React, {useState} from 'react';
import Button from '../lib/Button';
import {View, TextInput} from 'react-native';

export default function Form({onSubmit, selectedValue}) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
          name: '',
          quantity: 0,
          unitPrice: 0,
        }
      : selectedValue,
  );

  const _onSubmit = event => {
    event.preventDefault();
    // Vanilla JS approch
    //const newData = new FormData(event.target);
    //const values = newData.entries.reduce((acc, [key, value]) => {
    //  acc[key] = value;
    //  return acc;
    //}, {});
    if (selectedValue) onSubmit(values);
  };
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <View onSubmit={_onSubmit}>
      <TextInput
        onChangeText={value =>
          handleChange({
            target: {
              name: 'name',
              value,
            },
          })
        }
        value={values.name}
      />
      <TextInput
        onChangeText={value =>
          handleChange({
            target: {
              name: 'unitPrice',
              value,
            },
          })
        }
        value={values.unitPrice}
      />
      <TextInput
        onChangeText={value =>
          handleChange({
            target: {
              name: 'quantity',
              value,
            },
          })
        }
        value={values.quantity}
      />
      <Button title="Submit" onClick={_onSubmit} />
    </View>
  );
}
