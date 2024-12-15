import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { BackHandler } from 'react-native';

const MainMenu = ({ navigation }) => {
  // Функция выхода из приложения
  const handleExitApp = () => {
    Alert.alert(
      "Выход",
      "Вы уверены, что хотите выйти?",
      [
        { text: "Отмена", style: "cancel" },
        { text: "Выход", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* Логотип */}
      <Image 
        source={require('../../assets/logo.jpg')} 
        style={styles.logo}
      />

      {/* Название приложения */}
      <Text style={styles.title}>FRIDGEATS</Text>

      {/* Кнопки */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('CameraScreen')}
      >
        <Text style={styles.buttonText}>Найти рецепт</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('RecipeList')}
      >
        <Text style={styles.buttonText}>Избранное</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleExitApp}
      >
        <Text style={styles.buttonText}>Выход</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Расстояние между логотипом и названием
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40, // Расстояние между названием и кнопками
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3', // Голубой цвет кнопок
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10, // Равноудаленность кнопок
    width: '80%', // Кнопки одинакового размера
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainMenu;
