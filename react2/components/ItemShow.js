import React from 'react';
import Button from './lib/Button';
import {View, Text} from 'react-native';

function ItemShow() {
  return (
    <View>
      <Text>Item #1</Text>
      <Button title="Delete" onClick={() => alert('item deleted')} />
    </View>
  );
}

export default ItemShow;
