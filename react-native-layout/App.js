import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './src/screen/Login.js';
import Signup from './src/screen/Signup.js';
import Todo from './src/screen/Todo.js';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login'); 

  return (
    <View style={styles.container}>
      {currentScreen === 'Login' ? (
        <Login 
          goToSignup={() => setCurrentScreen('Signup')}
          goToTodo={() => setCurrentScreen('Todo')}
        />
      ) : currentScreen === 'Signup' ? (
        <Signup 
          goToLogin={() => setCurrentScreen('Login')}
          goToTodo={() => setCurrentScreen('Todo')}
        />
      ) : (
        <Todo 
          goToLogin={() => setCurrentScreen('Login')}
          goToSignup={() => setCurrentScreen('Signup')}
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});