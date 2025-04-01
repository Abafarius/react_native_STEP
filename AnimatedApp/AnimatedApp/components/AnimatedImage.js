// components/AnimatedImage.js
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const AnimatedImage = () => {
  const [scale] = useState(new Animated.Value(1));

  const handleLongPress = () => {
    Animated.spring(scale, {
      toValue: 2, // Увеличиваем изображение в 2 раза
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={handleLongPress}>
        <Animated.Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/5/54/Assassin%27s_Creed_Shadows_cover.png' }} // Укажи URL картинки
          style={[styles.image, { transform: [{ scale }] }]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default AnimatedImage;
