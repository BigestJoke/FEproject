import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StartScreen = ({ navigation }) => {
  useEffect(() => {
    // Таймер для перехода на MainMenu через 3 секунды
    const timer = setTimeout(() => {
      navigation.replace('MainMenu'); // Замещает StartScreen на MainMenu
    }, 3000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Логотип */}
      {/* <Image 
        source={require('../assets/logo.jpg')} 
        style={styles.logo} 
      /> */}
      
      {/* Название приложения */}
      <Text style={styles.title}>Fridgeats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6D1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, 
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
});

export default StartScreen;
