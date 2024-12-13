// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from '../screens/MainMenu';
import RecipeList from '../screens/RecipeList';
import CameraScreen from '../screens/CameraScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="MainMenu">
    <Stack.Screen name="MainMenu" component={MainMenu} options={{ title: 'Главное меню' }} />
    <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Рецепты' }} />
    <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Камера' }} />
  </Stack.Navigator>
);

export default AppNavigator;