import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {View} from 'react-native';

export default function CredentialsForm({onSubmit}) {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const _onSubmit = () => {
    onSubmit(values);
  };
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange2 = function (name) {
    return function (value) {
      setValues({
        ...values,
        [name]: value,
      });
    };
  };

  return (
    <View>
      <TextInput
        label="Username"
        value={values.username}
        onChangeText={value =>
          handleChange({target: {value, name: 'username'}})
        }
      />
      <TextInput
        label="Password"
        value={values.password}
        onChangeText={handleChange2('password')}
      />
      <Button mode="contained" onPress={_onSubmit}>
        Login
      </Button>
    </View>
  );
}
