import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DatePicker from "react-native-datepicker";

export default function TaskForm({onSubmit, selectedValue}) {
  const [values, setValues] = useState(
    selectedValue === true
      ? {
          nom: '',
          status: 'uncompleted',
          dateJalon: ''
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
        <DatePicker
        style={{width: 500}}
        date={values.dateJalon}
        mode="date"
        placeholder="Date Jalon"
        format="YYYY-MM-DD"
        minDate="2019-05-01"
        maxDate="2042-06-01"
        confirmBtnText="Confirmer"
        cancelBtnText="Annuler"
        onDateChange={(date) => {
            handleChange(
            { target : {
                name : 'dateJalon', date,
                }})}}
        />
      <Button onPress={_onSubmit}>Submit</Button>
    </View>
  );
}
