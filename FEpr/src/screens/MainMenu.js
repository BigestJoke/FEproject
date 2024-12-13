import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MainMenu = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.logo}>FRIDGEATS</Text>
    <Button title="Поиск рецепта" onPress={() => navigation.navigate('RecipeList')} />
    <Button title="Избранное" onPress={() => console.log('Избранное')} />
    <Button title="Выход" onPress={() => console.log('Выход')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MainMenu;