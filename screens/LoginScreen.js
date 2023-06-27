import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import UserContext from '../UserContext';
import styles from '../styles/styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUsername } = useContext(UserContext);

  const login = () => {
    axios.post('http://192.168.2.21:3000/login', { email, password })
      .then((response) => {
        setUsername(response.data.username);
        navigation.navigate('Home');
      })
      .catch(() => alert('Error logging in'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <TextInput style={styles.input} placeholder="Email or Username" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={login} />
      <Text>Not a member? <Text onPress={() => navigation.navigate('Signup')}>Signup now</Text></Text>
    </View>
  );
};

export default LoginScreen;
