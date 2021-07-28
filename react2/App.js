import ButtonGroup from './components/ButtonGroup';
import Page from './components/Page';
import ListProvider from './contexts/ListContext';
import React, {useState} from 'react';
import Button from './components/lib/Button';
import CredentialsProvider from './contexts/CredentialContext';
import ThemeProvider from './contexts/ThemeContext';
import {View, Text} from 'react-native';

function App() {
  const [page, setPage] = useState(0);
  return (
    <ThemeProvider>
      <CredentialsProvider>
        <View>
          <View>
            <ButtonGroup />
            <Button
              title="Change Page"
              onClick={() => setPage((page + 1) % 3)}
            />
            <ListProvider>
              <Page />
            </ListProvider>
          </View>
        </View>
      </CredentialsProvider>
    </ThemeProvider>
  );
}

export default App;
