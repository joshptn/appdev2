import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet 
} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
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
        borderColor: 'black',
        borderWidth: 5,
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
