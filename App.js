import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeComponent';
import NewSessionScreen from './NewSessionComponent';
import PatienRecordScreen from './PatientRecordComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Rehabilitation Tool'}}
        />
        <Stack.Screen
          name="NewSession"
          component={NewSessionScreen}
          options={{title: 'New Session 1/1/23'}}
          />
        <Stack.Screen
          name="PatienRecord"
          component={PatienRecordScreen}
          options={{title: 'Patient 1/1/23'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  menuButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 24,
    fontWeight: '500',
    color: 'coral',
  },
});
