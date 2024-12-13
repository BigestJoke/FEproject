import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CameraScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Сфотографируйте свои продукты</Text>
    <Button title="Назад" onPress={() => navigation.goBack()} />
    <Button title="Ввести вручную" onPress={() => console.log('Ввести вручную')} />
  </View>
);

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
});

export default CameraScreen;