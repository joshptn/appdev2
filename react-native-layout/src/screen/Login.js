import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
            <Image source={require('../../assets/login.png')} style={styles.logo} />
            <Text style={styles.title}>Log In</Text>
        </View>

        {/* Body */}
        <View style={styles.body}>
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} style={styles.icon} />
                <TextInput  placeholder="Email Address" style={styles.input} 
            />
            </View>
            
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} style={styles.icon} />
                <TextInput placeholder="Password" style={styles.input} />
            </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signup}>
                <Text>Don't have an account? </Text>
                <Text style={styles.link}>Sign up</Text>
            </View>
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

    body: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },

    inputContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#1a0b2e',
        borderRadius: 35,
        marginBottom: 15,
        width: '85%',
        paddingHorizontal: 15,
        backgroundColor: '#f5e3ff',
        alignItems: 'center'
    },

    input:{ 
        height: 50,
        flex: 1
    },

    icon: {
        color: "#4910e6",
        marginRight: 10
    },

    footer: {
        flex: 1,
        alignItems: 'center',
    },

    buttonText: {
        color: 'rgb(10, 3, 37)3',
        fontWeight: 700
  },

    button: {
        width: 200,
        height: 50,
        borderColor: '#19076b',
        borderWidth: 2,
        backgroundColor: '#79dbff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
  },

    signup: {
        flexDirection: 'row',
        marginTop: 30
  },
  
    link: {
        color: "#2505b1",
        fontWeight: 600
  },


});
