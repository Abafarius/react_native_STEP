// components/ToggleText.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const ToggleText = () => {
  const [opacity] = useState(new Animated.Value(0)); // Начальная прозрачность

  const toggleVisibility = () => {
    Animated.timing(opacity, {
      toValue: opacity._value === 0 ? 1 : 0, // Меняем прозрачность с 0 на 1 или наоборот
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleVisibility} style={styles.button}>
        <Text style={styles.buttonText}>Показать/Скрыть текст</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.textContainer, { opacity }]}>
        <Text style={styles.text}>Это анимированный текст!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#6200ea',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default ToggleText;
