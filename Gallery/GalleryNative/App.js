// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  // Начальный массив изображений
  const [images, setImages] = useState([
    {
      id: "1",
      src: "https://picsum.photos/id/237/200/300",
      name: "Щенок",
    },
    {
      id: "2",
      src: "https://picsum.photos/id/238/200/300",
      name: "Город",
    },
    {
      id: "3",
      src: "https://picsum.photos/id/239/200/300",
      name: "Закат",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newName, setNewName] = useState("");

  // Обработчик долгого нажатия
  const handleLongPress = (item) => {
    setSelectedImage(item);
    setNewName(item.name);
    setModalVisible(true);
  };

  // Удаление изображения
  const deleteImage = () => {
    setImages(images.filter((img) => img.id !== selectedImage.id));
    setModalVisible(false);
  };

  // Переименование изображения
  const renameImage = () => {
    setImages(
      images.map((img) =>
        img.id === selectedImage.id ? { ...img, name: newName } : img
      )
    );
    setModalVisible(false);
  };

  // Рендеринг элемента списка
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onLongPress={() => handleLongPress(item)}
    >
      <Image source={{ uri: item.src }} style={styles.image} />
      <Text style={styles.imageName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Галерея</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />

      {/* Модальное окно для действий */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
            />
            <View style={styles.buttonContainer}>
              <Button title="Переименовать" onPress={renameImage} />
              <Button title="Удалить" color="red" onPress={deleteImage} />
              <Button title="Отмена" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  imageName: {
    marginTop: 5,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    gap: 10,
  },
});
