import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 50}}>
        <Text style={{fontSize: 30, fontWeight: `600`, color: `#51b8c2`}}>
          YR Practice
        </Text>
      </View>
      <TextInput style={styles.inputstyle} placeholder={`ID`}></TextInput>
      <TextInput style={styles.inputstyle} placeholder={`PASSWORD`}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: `center`,
    justifyContent: `center`,
  },
  inputstyle: {
    width: `80%`,
    height: 40,

    marginBottom: 15,
  },
});

export default App;
