import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const recipes = [
  { id: '1', name: 'Спагетти Карбонара', time: '1 ч' },
  { id: '2', name: 'Салат Цезарь', time: '30 мин' },
];

const RecipeList = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Рецепты</Text>
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <Text style={styles.recipeName}>{item.name}</Text>
          <Text>{item.time}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  recipeName: {
    fontSize: 18,
  },
});

export default RecipeList;