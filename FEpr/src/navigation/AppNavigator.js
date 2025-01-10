import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen'; // Импортируем StartScreen
import MainMenu from '../screens/MainMenu';
import RecipeList from '../screens/RecipeList';
import CameraScreen from '../screens/CameraScreen';
import LoadingScreen from '../screens/LoadingScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeProcessScreen from '../screens/RecipeProcessScreen';
import HandInput from '../screens/HandInput'; // Импортируем HandInput

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="StartScreen"
    screenOptions={{
      headerShown: false, // Скрываем заголовок по умолчанию для всех экранов
    }}
  >
    {/* Стартовый экран, который будет показываться первым */}
    <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="MainMenu" component={MainMenu} />
    <Stack.Screen 
      name="RecipeList" 
      component={RecipeList} 
      options={{
        title: 'Избранное',
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} 
    />
    <Stack.Screen 
      name="CameraScreen" 
      component={CameraScreen} 
      options={{
        title: 'Найти рецепт', 
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} 
    />
    <Stack.Screen 
      name="Loading" 
      component={LoadingScreen} 
      options={{
        title: 'Загрузка',
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} 
    />
    <Stack.Screen 
      name="RecipeDetailScreen" 
      component={RecipeDetailScreen} 
      options={{
        title: 'Найденные рецепты',
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} 
    />
    <Stack.Screen 
      name="RecipeProcess" 
      component={RecipeProcessScreen} 
      options={{
        title: 'Процесс приготовления',
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} 
    />
    <Stack.Screen 
      name="HandInput"  // Добавляем новый экран
      component={HandInput} 
      options={{
        title: 'Список продуктов',
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} 
    />
  </Stack.Navigator>
);

export default AppNavigator;
