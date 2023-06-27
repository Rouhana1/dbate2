import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="white" />
        <Text style={styles.headerText}>Dashboard</Text>
        <FontAwesome name="equals" size={24} color="white" />
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.item} onPress={() =>
          navigation.navigate('Profile')}>
          <Image source={{uri: 'https://randomuser.me/api/portraits/men/68.jpg'}}
            style={styles.image} />
          <View style={styles.itemText}>
            <Text style={styles.name}>Name Surname</Text>
            <Text style={styles.detail}>Some detail of investor</Text>
          </View>
        </TouchableOpacity>
        {/* Repeat the above TouchableOpacity for each item */}
      </View>
      <View style={styles.footer}>
        <FontAwesome name="user" size={24} color="white" />
        <FontAwesome name="money" size={24} color="white" />
        <FontAwesome name="pie-chart" size={24} color="white" />
        <FontAwesome name="cog" size={24} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2191fb',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    
    color: 'white',
    fontSize: 20,
    marginTop: 25
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    color: 'black',
  },
  detail: {
    fontSize: 14,
    color: '#999999',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2191fb',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default HomeScreen;
