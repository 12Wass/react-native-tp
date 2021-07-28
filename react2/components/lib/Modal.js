import React, {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {
  Modal as RNModal,
  View,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

function Modal({title, open, onClose, children}) {
  const {theme} = useContext(ThemeContext);
  const styleModal = {
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    borderColor: theme === 'dark' ? 'white' : 'black',
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onClose}>
            <Text style={styles.textStyle}>CLOSE</Text>
          </Pressable>
          <View>{children}</View>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modal;
