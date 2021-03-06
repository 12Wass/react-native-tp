import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function Form({onSubmit, selectedValue}) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
          nom: '',
          status: 'uncompleted',
        }
      : selectedValue,
  );

  const _onSubmit = () => {
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
        label="Nom"
        onChangeText={value =>
          handleChange({
            target: {
              name: 'nom',
              value,
            },
          })
        }
        value={values.nom}
      />
      <Button onPress={_onSubmit}>Submit</Button>
    </View>
  );
}
