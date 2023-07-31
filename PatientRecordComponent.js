import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ImageBackground, View, TouchableOpacity } from 'react-native';

const PatienRecordScreen = ({navigation}) => {
  return (    
    <View style={styles.container}>
      <ImageBackground source={require('./assets/patient.jpg')} resizeMode="cover" style={styles.menuPatient}>
        <Text style={styles.buttonLabel}>Active Video</Text>
        <Image
          style={styles.btnImageRecord}
          source={require('./assets/record.svg')}
        />
      </ImageBackground>
      <View style={styles.menuButtonsInline}>
        <TouchableOpacity style={[styles.menuButtonInline, styles.menuButtonName]}><Text style={styles.buttonLabelInline}>Patient Name</Text></TouchableOpacity>
        <TouchableOpacity style={styles.menuButtonInline}>
          <Image
            style={styles.btnImageSave}
            source={require('./assets/save.svg')}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.boldText, {fontSize: 36}}>Rehabilitation Tool</Text>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.buttonLabel}>Repetition Exercise 1</Text>
        <Text style={styles.buttonCount}>12</Text>
        <Image
          style={styles.btnImageEdit}
          source={require('./assets/edit.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.buttonLabel}>Repetition Exercise 2</Text>
        <Text style={styles.buttonCount}>8</Text>
        <Image
          style={styles.btnImageEdit}
          source={require('./assets/edit.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.buttonLabel}>Repetition Exercise 3</Text>
        <Text style={styles.buttonCount}>3</Text>
        <Image
          style={styles.btnImageEdit}
          source={require('./assets/edit.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.buttonLabel}>Repetition Exercise 4</Text>
        <Text style={styles.buttonCount}>2</Text>
        <Image
          style={styles.btnImageEdit}
          source={require('./assets/edit.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.buttonLabel}>Repetition Exercise 5</Text>
        <Text style={styles.buttonCount}>1</Text>
        <Image
          style={styles.btnImageEdit}
          source={require('./assets/edit.svg')}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default PatienRecordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
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
    marginBottom: 6,
    minWidth: '100%',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  menuButtonInline: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 8
  },
  buttonLabel: {
    fontSize: 22,
    fontWeight: '500',
    color: 'coral',
  },
  buttonLabelInline: {
    fontSize: 16,
    fontWeight: '500',
    color: 'coral',
  },
  buttonCount: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '400',
    color: '#000000',
    backgroundColor: '#B3B3B3',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 2,
    paddingTop: 2,
  },
  btnImageEdit: {
    width: 28,
    height: 25
  },
  btnImageSearch: {
    width: 22,
    height: 23
  },
  btnImageRecord: {
    width: 59,
    height: 59
  },
  btnImageSave: {
    width: 20,
    height: 20
  },
  menuButtonsInline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  menuPatient: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundRepeat: 'repeat',
    backgroundImage: 'url(./assets/patient.jpg)',
    backgroundSize: 'cover',
    width: '100%',
    height: '206px',
  },
  menuButtonName: {
    width: '80%'
  }
});
