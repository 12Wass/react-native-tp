import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function Form({onSubmit, selectedValue}) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
          code: '',
          message: '',
          description: '',
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
        label="Code"
        onChangeText={value =>
          handleChange({
            target: {
              name: 'code',
              value,
            },
          })
        }
        value={values.code}
      />
      <TextInput
        label="Message"
        onChangeText={value =>
          handleChange({
            target: {
              name: 'message',
              value,
            },
          })
        }
        value={values.message}
      />
      <TextInput
        label="Description"
        onChangeText={value =>
          handleChange({
            target: {
              name: 'description',
              value,
            },
          })
        }
        value={values.description}
      />
      <Button onPress={_onSubmit}>Submit</Button>
    </View>
  );
}
