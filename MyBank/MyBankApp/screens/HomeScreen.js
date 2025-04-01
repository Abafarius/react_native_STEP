import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в Мой Банк</Text>
      <Button title="Текущий счёт" onPress={() => navigation.navigate('Account')} />
      <Button title="Помощь" onPress={() => navigation.navigate('Help')} />
      <Button title="Переводы" onPress={() => navigation.navigate('Transfers')} />
      <Button title="Информация о кредите" onPress={() => navigation.navigate('CreditInfo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
});
