import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/screen/Login.js';
import Signup from './src/screen/Signup.js';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login'); 

  return (
    <View style={styles.container}>
      {currentScreen === 'Login' ? (
        <Login goToSignup={() => setCurrentScreen('Signup')} />
      ) : (
        <Signup goToLogin={() => setCurrentScreen('Login')} />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});