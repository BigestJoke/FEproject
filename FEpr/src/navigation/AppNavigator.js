import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen'; 
import MainMenu from '../screens/MainMenu';
import Favourite  from '../screens/Favourite';
import Camera from '../screens/Camera';
import Loading from '../screens/Loading';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeProcessScreen from '../screens/RecipeProcessScreen';
import HandInput from '../screens/HandInput'; 

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
      name="Favourite" 
      component={Favourite} 
      options={{
        title: 'Избранное',
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} 
    />
    <Stack.Screen 
      name="Camera" 
      component={Camera} 
      options={{
        title: 'Найти рецепт', 
        headerStyle: { backgroundColor: '#2196F3' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} 
    />
    <Stack.Screen 
      name="Loading" 
      component={Loading} 
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
