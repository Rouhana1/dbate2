import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import styles from '../styles/styles';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    axios.post('http://192.168.2.21:3000/signup', { username, email, password })
  .then(() => alert('User created'))
  .catch(() => alert('Error creating user'));

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Form</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={setPassword} />
      <Button title="Signup" onPress={signup} />
      <Text>Already a member? <Text onPress={() => navigation.navigate('Login')}>Login</Text></Text>
    </View>
  );
};

export default SignupScreen;
