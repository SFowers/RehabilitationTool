import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (    
    <View style={styles.container}>
      <Text style={styles.boldText, {fontSize: 36}}>Rehabilitation Tool</Text>
      <TouchableOpacity style={styles.menuButton} onPress={() =>
        navigation.navigate('NewSession')
      }><Text style={styles.buttonLabel}>New Session ➕</Text></TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() =>
        navigation.navigate('PatienRecord')
      }><Text style={styles.buttonLabel}>Patient Records ➡️</Text></TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}><Text style={styles.buttonLabel}>Data Export ⏏️</Text></TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}><Text style={styles.buttonLabel}>Settings ⚙️</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

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
