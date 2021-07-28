import React, {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {Text, Button as RNButton} from 'react-native';

function Button({variant = 'default', title, size = 20, onClick}) {
  const {theme} = useContext(ThemeContext);
  const style = {textTransform: 'uppercase'};

  if (['rounded', 'icon'].includes(variant)) {
    style.borderRadius = '50%';
  }

  if (variant === 'icon') {
    style.width = size;
    style.height = style.width;
    style.maxHeight = style.width;
    style.maxWith = style.width;
    style.minHeight = style.width;
    style.minWith = style.width;
  }

  style.color = theme === 'dark' ? 'white' : 'black';
  return (
    <RNButton
      color={theme === 'dark' ? 'black' : 'white'}
      style={style}
      onPress={onClick}
      title={title}
    />
  );
}

export default Button;
