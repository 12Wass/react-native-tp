import React, {useState} from 'react';
import ListProvider from '../contexts/ListContext';
import List from '../components/Code/List';
import AddEditItem from '../components/Code/AddEditItem';
import Text from "react-native-paper/src/components/Typography/Text";
export default function CodesScreen() {
  const [selectedItem, setSelectedItem] = useState();
  const handleEditItem = item => setSelectedItem(item);
  return (
      <>
        <ListProvider>
          <AddEditItem selectedItem={selectedItem} />
          <List onEdit={handleEditItem} />
        </ListProvider>
          <Text>Listes d'achat</Text>
      </>
  );
}
