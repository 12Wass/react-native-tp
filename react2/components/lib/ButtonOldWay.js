import React from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {Button as RNButton} from 'react-native';
function Button({variant = 'default', title, size = 20, theme: _, onClick}) {
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

  return (
    <ThemeContext.Consumer>
      {({theme}) => {
        return (
          <RNButton
            style={{
              ...style,
              color: theme === 'dark' ? 'white' : 'black',
            }}
            color={theme !== 'dark' ? 'white' : 'black'}
            onPress={onClick}
            title={title}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Button;
