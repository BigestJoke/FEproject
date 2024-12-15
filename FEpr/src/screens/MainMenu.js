import React from 'react';
import { View, Text, StyleSheet, Button, Platform, BackHandler } from 'react-native';

const MainMenu = ({ navigation }) => {
  const handleExit = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();  
    } else {
      console.log('Выход на iOS не поддерживается');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FRIDGEATS</Text>
      <Button title="Поиск рецепта" onPress={() => navigation.navigate('RecipeList')} />
      <Button title="Избранное" onPress={() => console.log('Избранное')} />
      <Button title="Камера" onPress={() => navigation.navigate('CameraScreen')} />
      <Button title="Выход" onPress={handleExit} />
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MainMenu;