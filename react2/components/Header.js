import React, {useContext} from 'react';
import ButtonOldWay from './lib/ButtonOldWay';
import {ThemeContext} from '../contexts/ThemeContext';
import {View, Text} from 'react-native';

function Header() {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>Website</Text>
      <ButtonOldWay title="Toggle Theme" role="theme" onClick={toggleTheme} />
      <Text>Home</Text>
      <Text>Credentials</Text>
    </View>
  );
}

export default Header;
