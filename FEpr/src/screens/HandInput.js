import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Keyboard, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HandInput = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const inputRef = useRef(null);

  const handleAddNewInput = () => {
    setIsAdding(true);
    setEditingIndex(null);
    setCurrentText('');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSaveItem = () => {
    if (currentText.trim()) {
      if (editingIndex === null) {
        setItems([...items, { text: currentText }]);
      } else {
        const updatedItems = [...items];
        updatedItems[editingIndex].text = currentText;
        setItems(updatedItems);
      }
      setCurrentText('');
      setEditingIndex(null);
      setIsAdding(false);
      Keyboard.dismiss();
    }
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setCurrentText(items[index].text);
    setIsAdding(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
      <TouchableOpacity onPress={() => handleEditItem(index)} style={styles.iconContainer}>
        <AntDesign name="edit" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteItem(index)} style={styles.iconContainer}>
        <AntDesign name="close" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.whiteRectangle}>
        <View style={styles.circle}>
          <AntDesign name="check" size={30} color="#fff" style={styles.checkIcon} />
        </View>
        <Text style={styles.title}>Список продуктов</Text>
        <View style={styles.separator}></View>

        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        {isAdding ? (
          <TextInput
            ref={inputRef}
            style={styles.input}
            value={currentText}
            onChangeText={setCurrentText}
            placeholder="Введите название продукта"
            onSubmitEditing={handleSaveItem}
            onBlur={handleSaveItem}
            returnKeyType="done"
          />
        ) : (
          <TouchableOpacity onPress={handleAddNewInput} style={styles.addButton}>
            <View style={styles.plusButton}>
              <AntDesign name="plus" size={30} color="#000" />
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.separator}></View>
        {/* Кнопки "Назад" и "Далее" */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressedButton,
            ]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Назад</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressedButton,
            ]}
            onPress={() => console.log('Далее нажато')}
          >
            <Text style={styles.buttonText}>Далее</Text>
          </Pressable>
        </View>
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
    backgroundColor: '#f0f0f0',
  },
  whiteRectangle: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 20,
    position: 'relative',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EF8103',
    position: 'absolute',
    top: -30,
    zIndex: 1,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center', 
  },
  checkIcon: {
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
  iconContainer: {
    marginLeft: 10,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  plusButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  pressedButton: {
    backgroundColor: '#EF8103',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HandInput;
