import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RecipeDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Рецепты</Text>
      <TouchableOpacity
        style={styles.recipeCard}
        onPress={() => navigation.navigate('RecipeProcess')} // Переход на экран процесса приготовления
      >
        <Image
          source={require('../assets/images/sup.jpg')}
          style={styles.recipeImage}
        />
        <View style={styles.recipeTextContainer}>
          <Text style={styles.recipeName}>Крем-суп из броколи и моркови</Text>
          <Text style={styles.recipeTime}>1 час</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  recipeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Полупрозрачный фон
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recipeTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipeTime: {
    fontSize: 16,
    color: 'gray',
  },
});

export default RecipeDetailScreen;
