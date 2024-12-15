import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CameraScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [imagePicked, setImagePicked] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImagePicked(true);
    }
  };

  const handleFindRecipe = () => {
    // Переход на экран загрузки перед RecipeDetailScreen
    navigation.navigate('Loading');  // Навигация на экран загрузки

    // После 4 секунд, переход на RecipeDetailScreen
    setTimeout(() => {
      navigation.navigate('RecipeDetailScreen');  // Переход на экран рецепта
    }, 4000);  // Задержка в 4 секунды
  };

  return (
    <View style={styles.container}>
      {!imagePicked && (
        <>
          <Text style={styles.instruction}>Выберите фотографию</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Открыть галерею</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {imagePicked && (
        <>
          <Text style={styles.instruction}>Ваша фотография</Text>
          <Image source={{ uri: image }} style={styles.image} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setImagePicked(false)}>
              <Text style={styles.buttonText}>Выбрать другую</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleFindRecipe}>
              <Text style={styles.buttonText}>Найти рецепт</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  instruction: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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

export default CameraScreen;
