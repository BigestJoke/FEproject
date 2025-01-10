import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen'; // Импортируем StartScreen
import MainMenu from '../screens/MainMenu';
import RecipeList from '../screens/RecipeList';
import CameraScreen from '../screens/CameraScreen';
import LoadingScreen from '../screens/LoadingScreen';  
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeProcessScreen from '../screens/RecipeProcessScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="StartScreen">
    {/* Стартовый экран, который будет показываться первым */}
    <Stack.Screen 
      name="StartScreen" 
      component={StartScreen} 
      options={{ headerShown: false }} // Скрываем заголовок на старте
    />
    <Stack.Screen 
      name="MainMenu" 
      component={MainMenu} 
      options={{ headerShown: false }} // Скрываем шапку на главном экране
    />
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
  </Stack.Navigator>
);

export default AppNavigator;
