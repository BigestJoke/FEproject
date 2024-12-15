import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const RecipeProcessScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Картинка над заголовком */}
      <Image
        source={require('../../assets/sup.jpg')}
        style={styles.image}
      />

      {/* Название блюда */}
      <Text style={styles.title}> Крем-суп из брокколи и моркови</Text>
            {/* Разделитель */}
            <View style={styles.separator} />

      {/* Ингредиенты */}
      <Text style={styles.subtitle}>Ингредиенты:</Text>
      <Text style={styles.text}>- Брокколи — 300 г. </Text>
      <Text style={styles.text}>- Морковь — 2 шт. (средние)</Text>
      <Text style={styles.text}>- Лук — 1 шт. (среднего размера)</Text>
      <Text style={styles.text}>- Чеснок — 2 зубчика</Text>
      <Text style={styles.text}>- Оливковое масло — 2 ст. л.</Text>
      <Text style={styles.text}>- Куриный или овощной бульон — 1 л.</Text>
      <Text style={styles.text}>- Сливки (по желанию) — 100 мл.</Text>
      <Text style={styles.text}>- Соль и перец — по вкусу</Text>
      <Text style={styles.text}>- Петрушка или базилик — для украшения</Text>

      {/* Разделитель */}
      <View style={styles.separator} />

      {/* Приготовление */}
      <Text style={styles.subtitle}> Приготовление:</Text>

      {/* Шаги приготовления */}
      <Text style={styles.stepTitle}>1. Подготовка ингредиентов:</Text>
      <Text style={styles.text}>- Нарежьте брокколи небольшими соцветиями.</Text>
      <Text style={styles.text}>- Очистите морковь и нарежьте её кубиками.</Text>
      <Text style={styles.text}>- Мелко нарежьте лук и чеснок.</Text>

      <Text style={styles.stepTitle}>2. Обжаривание овощей:</Text>
      <Text style={styles.text}>1. В глубокой кастрюле нагрейте оливковое масло.</Text>
      <Text style={styles.text}>2. Добавьте лук и обжарьте его до мягкости около 5 минут.</Text>
      <Text style={styles.text}>3. Добавьте чеснок и обжарьте ещё 1 минуту.</Text>

      <Text style={styles.stepTitle}>3. Варка супа:</Text>
      <Text style={styles.text}>1. В кастрюлю добавьте брокколи и морковь.</Text>
      <Text style={styles.text}>2. Залейте овощи бульоном так, чтобы они были полностью покрыты жидкостью.</Text>
      <Text style={styles.text}>3. Доведите суп до кипения и варите на среднем огне примерно 15-20 минут, пока брокколи и морковь не станут мягкими.</Text>

      <Text style={styles.stepTitle}>4. Создание кремообразной текстуры:</Text>
      <Text style={styles.text}>1. С помощью блендера измельчите суп до однородного состояния прямо в кастрюле или переложите суп в блендер порционно.</Text>
      <Text style={styles.text}>2. Если хотите более нежный вкус, добавьте сливки и перемешайте.</Text>
      <Text style={styles.text}>3. Посолите и поперчите по вкусу.</Text>

      <Text style={styles.stepTitle}>5. Подача:</Text>
      <Text style={styles.text}>1. Разлейте суп по тарелкам или мискам.</Text>
      <Text style={styles.text}>2. Украсьте свежей зеленью (петрушкой или базиликом).</Text>
      <Text style={styles.text}>3. Можно добавить небольшую каплю сливок сверху для красоты и дополнительной кремовости.</Text>
            {/* Разделитель */}
            <View style={styles.separator} />
    
      {/* Текст "Приятного аппетита" */}
      <Text style={styles.footer}>Приятного аппетита!</Text>

      {/* Кнопка "Добавить в избранное" */}
      <TouchableOpacity style={styles.favoriteButton} onPress={() => console.log('Добавлено в избранное')}>
        <Text style={styles.favoriteButtonText}>Добавить в избранное</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    lineHeight: 24,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  footer: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
  favoriteButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 50, 
  },
  favoriteButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecipeProcessScreen;
