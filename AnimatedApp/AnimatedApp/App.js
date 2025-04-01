// App.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ToggleText from './components/ToggleText';
import AnimatedImage from './components/AnimatedImage';
import FadeInBlocks from './components/FadeInBlocks';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.componentWrapper}>
        <ToggleText />
        <AnimatedImage />
        <FadeInBlocks />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    padding: 20,
  },
  componentWrapper: {
    width: '100%',
    alignItems: 'center',
  },
});

export default App;
