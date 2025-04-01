// components/FadeInBlocks.js
import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const FadeInBlocks = () => {
  const fadeAnim = new Animated.Value(0); // Начальная прозрачность

  useEffect(() => {
    Animated.stagger(300, [ // Плавное появление с задержкой между блоками
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.block, { opacity: fadeAnim }]}>
        <Text style={styles.blockText}>Первый блок</Text>
      </Animated.View>
      <Animated.View style={[styles.block, { opacity: fadeAnim }]}>
        <Text style={styles.blockText}>Второй блок</Text>
      </Animated.View>
      <Animated.View style={[styles.block, { opacity: fadeAnim }]}>
        <Text style={styles.blockText}>Третий блок</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  block: {
    padding: 20,
    backgroundColor: '#6200ea',
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  blockText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default FadeInBlocks;
