import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Camera = ({ navigation }) => {
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
      navigation.navigate('RecipeList');  // Переход на экран рецепта
    }, 4000);  // Задержка в 4 секунды
  };

  return (
    <View style={styles.container}>
      {/* Верхняя часть с кнопками */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.topBarText}> &lt; Назад</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  navigation.navigate('HandInput')}>
          <Text style={styles.topBarText}>Ввести вручную {'>'}</Text>
        </TouchableOpacity>
      </View>

      {/* Черный квадрат */}
      {!imagePicked && (
        <View style={styles.whiteSquare}>
        </View>
      )}

      {/* Кнопка Открыть галерею */}
      {!imagePicked && (
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Открыть галерею</Text>
        </TouchableOpacity>
      )}

      {/* После выбора изображения */}
      {imagePicked && (
        <View style={styles.imageContainer}>
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    paddingTop: 20,
    marginBottom: 20,
  },
  topBarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  whiteSquare: {
    backgroundColor: '#fff',
    width: '80%',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  instruction: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
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
    backgroundColor: '#f1f1f1',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Camera;
