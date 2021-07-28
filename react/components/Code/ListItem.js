import React, {useContext} from 'react';
import {IconButton, List} from 'react-native-paper';
import {CodeContext} from '../../contexts/CodeContext';

export default function ListItem({item, onEdit}) {
  const {deleteElement} = useContext(CodeContext);

  return (
    <List.Item
      titleStyle={{color: 'black'}}
      descriptionStyle={{color: 'black'}}
      title={item.code + ' ' + item.message}
      description={item.description}
      right={props => (
        <>
          <IconButton
            icon="delete"
            size={20}
            color="black"
            onPress={() => deleteElement(item)}
          />
          <IconButton color="black" icon="pencil" size={20} onPress={onEdit} />
        </>
      )}
    />
  );
}
