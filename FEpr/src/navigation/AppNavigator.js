import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from '../screens/MainMenu';
import RecipeList from '../screens/RecipeList';
import CameraScreen from '../screens/CameraScreen';
import LoadingScreen from '../screens/LoadingScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeProcessScreen from '../screens/RecipeProcessScreen'; // Импорт нового экрана

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="MainMenu">
    <Stack.Screen name="MainMenu" component={MainMenu} options={{ title: 'Главное меню' }} />
    <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Рецепты' }} />
    <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Камера' }} />
    <Stack.Screen name="Loading" component={LoadingScreen} options={{ title: 'Загрузка' }} />
    <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Найденные Рецепты' }} />
    <Stack.Screen name="RecipeProcess" component={RecipeProcessScreen} options={{ title: 'Процесс приготовления' }} /> 
  </Stack.Navigator>
);

export default AppNavigator;
