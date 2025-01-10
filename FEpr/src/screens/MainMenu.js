import React from 'react';
import { View, Text, StyleSheet, Image, Alert, Pressable } from 'react-native';
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
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed 
        ]}
        onPress={() => navigation.navigate('CameraScreen')}
      >
        <Text style={styles.buttonText}>Найти рецепт</Text>
      </Pressable>

      <Pressable 
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={() => navigation.navigate('RecipeList')}
      >
        <Text style={styles.buttonText}>Избранное</Text>
      </Pressable>

      <Pressable 
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={handleExitApp}
      >
        <Text style={styles.buttonText}>Выход</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f1f1f1', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
    width: '70%', 
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#EF8103', 
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainMenu;
