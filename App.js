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
      <View style={{marginBottom: 60}}>
        <Text style={{fontSize: 35, fontWeight: `800`, color: `#3280fc`}}>
          YR APP STORE
        </Text>
      </View>
      <TextInput style={styles.inputstyle} placeholder="EMAIL" />
      <TextInput style={styles.inputstyle} placeholder="PASSWORD" />

      <View style={styles.findBox}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
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

    marginBottom: 35,

    borderColor: `#888`,
    borderBottomWidth: 1,
    borderBottomWidth: 1,

    padding: 10,
    borderRadius: 5,
    shadowColor: `#888`,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  findBox: {
    width: `80%`,
    padding: 3,

    flexDirection: `row`,
    justifyContent: `space-between`,

    marginBottom: 100,
    marginTop: 60,
  },

  btn1: {
    width: `50%`,
    height: 45,

    marginRight: 5,
    borderRadius: 5,

    alignItems: `center`,
    justifyContent: `center`,

    backgroundColor: `#2241a8`,
  },

  btn2: {
    width: `50%`,
    height: 45,

    marginLeft: 5,
    borderRadius: 5,

    alignItems: `center`,
    justifyContent: `center`,

    backgroundColor: `#180f85`,
  },

  btnText: {
    fontSize: 25,

    fontWeight: `700`,
    color: `#fff`,
  },
});

export default App;
