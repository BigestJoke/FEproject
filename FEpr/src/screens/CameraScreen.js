// CameraScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'; // Импортируем навигацию

const CameraScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();

  // Функция для открытия галереи и выбора изображения
  const pickImage = async () => {
    try {
      // Запрос разрешения на доступ к медиатеке
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert('Ошибка', 'Разрешение на доступ к галерее необходимо для выбора изображения.');
        return;
      }

      // Открытие галереи для выбора изображения
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      // Если пользователь выбрал изображение, отображаем его
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Ошибка', 'Что-то пошло не так при выборе изображения.');
    }
  };

  // Функция для поиска рецепта и перехода на экран загрузки
  const searchRecipe = () => {
    // Перенаправление на экран загрузки
    navigation.navigate('Loading');

    // После 3 секунд переключаем на экран с рецептом
    setTimeout(() => {
      navigation.navigate('RecipeDetail');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выберите фотографию</Text>

      {/* Кнопка для открытия галереи */}
      <Button title="Открыть галерею" onPress={pickImage} />

      {/* Если изображение выбрано, отображаем его */}
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}

      {/* Кнопка для поиска рецепта, отображается после выбора изображения */}
      {selectedImage && (
        <Button title="Поиск рецепта" onPress={searchRecipe} />
      )}

      {/* Кнопка для возврата на предыдущий экран */}
      <View style={styles.buttonContainer}>
        <Button title="Назад" onPress={() => navigation.goBack()} />
      </View>
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
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default CameraScreen;
