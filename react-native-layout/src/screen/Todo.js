import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, Alert} from "react-native"
import { Ionicons } from '@expo/vector-icons';

export default function Todo({goToSignup, goToLogin}) {

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');


  const addTodo = () => {
    if (inputText.trim() === '') {
      Alert.alert("Empty Todo", );
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      text: inputText,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };


  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };


  const confirmDelete = (id) => {
    Alert.alert(
      "Delete Todo?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => deleteTodo(id), style: "destructive" }
      ]
    );
  };


  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

        <View style={styles.container}>

            <View style={styles.header}>
            <Text style={styles.title}>My Todo List</Text>
            </View>

            <View style={styles.inputContainer}>
            <Ionicons name="search-outline" size={20} style={styles.icon} />
            <TextInput
                placeholder="Search Todos"
                style={styles.input}
                value={searchText}
                onChangeText={setSearchText}
            />
            </View>

            <View style={styles.inputContainer}>
            <Ionicons name="create-outline" size={20} style={styles.icon} />
            <TextInput
                placeholder="Enter Todo"
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
            />
            <TouchableOpacity onPress={addTodo}>
                <Ionicons name="add-circle-outline" size={26} color="#4910e6" />
            </TouchableOpacity>
            </View>

            <ScrollView style={{ width: '85%' }}>

            {filteredTodos.map(todo => (
                <View key={todo.id} style={styles.todoItem}>
                <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
                    <Ionicons
                    name={todo.completed ? "checkmark-circle" : "ellipse-outline"}
                    size={24}
                    color={todo.completed ? "#2ecc71" : "#4910e6"}
                    style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
                <Text
                    style={[
                    styles.todoText,
                    todo.completed && styles.completedTodo
                    ]}
                >
                    {todo.text}
                </Text>
                <TouchableOpacity
                    style={{ marginLeft: 'auto' }}
                    onPress={() => confirmDelete(todo.id)}
                >
                    <Ionicons name="trash-outline" size={24} color="#e60d0d" />
                </TouchableOpacity>

                </View>
            ))}
            <View style={styles.signup}>
                <Text>Go to</Text>
                <Text style={styles.link} onPress={goToLogin}>Back To Login</Text>
            </View>
            <View style={styles.signup}>
                <Text>Go to</Text>
                <Text style={styles.link} onPress={goToSignup}>Back To Signup</Text>
            </View>
            </ScrollView>

        </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#6b94e0',
        alignItems: 'center'
    },

    header: {
        marginTop: 80,
        marginBottom: 20,
        alignItems: 'center'
    },

    title: {
        fontSize: 40,
        fontWeight: 700,
        color: '#2b0b55'
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
        alignItems: 'center',
        height: 50
    },

    input: {
        flex: 1,
        height: '100%'
    },

    icon: {
        color: "#4910e6",
        marginRight: 10
    },

    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5e3ff',
        borderRadius: 35,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginBottom: 10
    },

    todoText: {
        fontSize: 16,
        color: '#0a0325'
    },

    completedTodo: {
        textDecorationLine: 'line-through',
        color: 'gray'
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