import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const RecipeScreen = ({ navigation }) => {
  const categories = [
    { title: "Горячие блюда", recipes: ["Спагетти Карбонара", "Спагетти Карбонара", "Спагетти Карбонара", "Спагетти Карбонара"] },
    { title: "Салаты", recipes: ["Спагетти Карбонара", "Спагетти Карбонара", "Спагетти Карбонара", "Спагетти Карбонара"] },
    { title: "Десерты", recipes: ["Спагетти Карбонара", "Спагетти Карбонара", "Спагетти Карбонара", "Спагетти Карбонара"] },
    { title: "Супы", recipes: ["Спагетти Карбонара", "Спагетти Карбонара", "Спагетти Карбонара", "Спагетти Карбонара"] },
  ];

  const RecipeCard = ({ recipe }) => (
    <View style={styles.recipeCard}>
      {/* Картинка блюда */}
      <Image
        source={require('../../assets/sup.jpg')}
        style={styles.recipeImage}
      />
      <View style={styles.recipeContent}>
        <Text style={styles.recipeTitle}>{recipe}</Text>
        <FontAwesome name="heart-o" size={20} color="red" style={styles.recipeHeart} />
      </View>
      <Text style={styles.recipeTime}>1 ч</Text>
    </View>
  );

  const RecipeRow = ({ title, recipes }) => (
    <View style={styles.recipeRow}>
      <View style={styles.rowHeader}>
        <Text style={styles.rowTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.rowSeeAll}>Все</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[...recipes, "Еще"]} 
        renderItem={({ item }) =>
          item === "Еще" ? (
            <View style={[styles.recipeCard, styles.centerCard]}>
              <Text style={styles.centerText}>Еще</Text>
            </View>
          ) : (
            <RecipeCard recipe={item} />
          )
        }
        keyExtractor={(item, index) => `${title}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
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

      <ScrollView>
        {categories.map((category) => (
          <RecipeRow key={category.title} title={category.title} recipes={category.recipes} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
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
  recipeRow: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rowSeeAll: {
    fontSize: 14,
    color: "#000",
  },
  recipeCard: {
    width: 130,
    height: 180, 
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    elevation: 3,
    padding: 10, 
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  recipeContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10, // Расстояние между картинкой и текстом
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  recipeTime: {
    fontSize: 12,
    color: "#999",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  recipeHeart: {
    marginLeft: 10, // Справа от названия
  },
  centerCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RecipeScreen;
