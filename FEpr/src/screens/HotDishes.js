import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const HotDishes = ({ navigation }) => {
  const hotDishes = [
    {
      id: '1',
      title: 'Спагетти Карбонара',
      ingredients: ['Бекон', 'Яйца', 'Сливки', 'Спагетти', 'Пармезан', 'Соль'],
      time: '1 ч',
      image: require('../../assets/sup.jpg'), 
    },
    {
      id: '2',
      title: 'Спагетти Карбонара',
      ingredients: ['Бекон', 'Яйца', 'Сливки', 'Спагетти', 'Пармезан', 'Соль'],
      time: '1 ч',
      image: require('../../assets/sup.jpg'),
    },
    {
      id: '3',
      title: 'Спагетти Карбонара',
      ingredients: ['Бекон', 'Яйца', 'Сливки', 'Спагетти', 'Пармезан', 'Соль'],
      time: '1 ч',
      image: require('../../assets/sup.jpg'),
    },
    {
      id: '4',
      title: 'Спагетти Карбонара',
      ingredients: ['Бекон', 'Яйца', 'Сливки', 'Спагетти', 'Пармезан', 'Соль'],
      time: '1 ч',
      image: require('../../assets/sup.jpg'),
    },
    {
      id: '5',
      title: 'Спагетти Карбонара',
      ingredients: ['Бекон', 'Яйца', 'Сливки', 'Спагетти', 'Пармезан', 'Соль'],
      time: '1 ч',
      image: require('../../assets/sup.jpg'),
    },
    {
      id: '6',
      title: 'Спагетти Карбонара',
      ingredients: ['Бекон', 'Яйца', 'Сливки', 'Спагетти', 'Пармезан', 'Соль'],
      time: '1 ч',
      image: require('../../assets/sup.jpg'),
    },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardIngredients}>{item.ingredients.join(', ')}</Text>
          <Text style={styles.cardTime}>{item.time}</Text>
        </View>
        <FontAwesome name="heart-o" size={20} color="red" style={styles.cardHeart} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Верхняя панель */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Поиск" />
        <TouchableOpacity style={styles.headerButton}>
          <AntDesign name="filter" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <FontAwesome name="heart-o" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Заголовок "Горячие блюда" */}
      <Text style={styles.pageTitle}>Горячие блюда</Text>

      {/* Список карточек */}
      <FlatList
        data={hotDishes}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "transparent",
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc", 
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 2,
    marginLeft: 5,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    padding: 10,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardIngredients: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  cardTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 10,
  },
  cardHeart: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});

export default HotDishes;
