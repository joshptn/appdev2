import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/login.png')} style={styles.logo} />
        <Text style={styles.title}>Log In</Text>
      </View>

      {/* Body */}
      <View style={styles.contentSection}>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6b94e0'
    },

    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50
    },

      title: {
        fontSize: 40,
        fontWeight: 700,
        color: '#2b0b55'
  },

    logo: {
        height: 150,
        width: 150,
        marginBottom: 30,
        marginTop: 130
    },

    contentSection: {
        flex: 1.5,
        borderColor: 'black',
        borderWidth: 5,
    },

    footer: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 5,
    },

});
