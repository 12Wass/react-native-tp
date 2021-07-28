import React, {useContext, useEffect, useState} from 'react';
import Form from './Form';
import {CodeContext} from '../../contexts/CodeContext';
import {View} from 'react-native';
import {Portal, Dialog, Button} from 'react-native-paper';

export default function AddEditItem({item = false}) {
  const [achatModal, setAchatModal] = useState(item);
  const [tacheModal, setTacheModal] = useState(item);
  const {addElement, editElement} = useContext(CodeContext);

  useEffect(() => {
    setAchatModal(item);
  }, [item]);

  const onSubmit = values => {
    if (achatModal === true) {
      addElement(values);
    } else {
      editElement(values);
    }
  };

  return (
    <View>
      <Button onPress={() => setAchatModal(true)}>
        Nouvelle liste d'achats
      </Button>
      <Portal>
        <Dialog
          visible={achatModal !== false}
          onDismiss={() => setAchatModal(false)}>
          <Dialog.Title>Liste d'achat</Dialog.Title>
          <Dialog.Content>
            <Form onSubmit={onSubmit} selectedValue={achatModal} />
          </Dialog.Content>
        </Dialog>
      </Portal>

      <Button onPress={() => setTacheModal(true)}>
        Nouvelle liste de tâches
      </Button>
      <Portal>
        <Dialog
          visible={tacheModal !== false}
          onDismiss={() => setTacheModal(false)}>
          <Dialog.Title>Liste de tâches</Dialog.Title>
          <Dialog.Content>
            <Form onSubmit={onSubmit} selectedValue={tacheModal} />
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}
