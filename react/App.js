import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CredentialScreen from './screens/CredentialsScreen';
import CodeScreen from './screens/CodeScreen';
import CredentialsProvider from './contexts/CredentialContext';
import {Provider as PaperProvider} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PaperProvider>
        <NavigationContainer>
          <CredentialsProvider>
            <Tab.Navigator initialRouteName="Credentials">
              <Tab.Screen name="Credentials" component={CredentialScreen} />
              <Tab.Screen name="Home" component={CodeScreen} />
            </Tab.Navigator>
          </CredentialsProvider>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
