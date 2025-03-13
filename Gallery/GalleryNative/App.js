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
      src: "https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png",
      name: "Adventure Time 1",
    },
    {
      id: "2",
      src: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/fff09eaf-17c3-446b-be32-8a0d47e4ccf1/02be52ef-6eb8-11ef-80b0-12734a5a1b4d?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=500",
      name: "Adventure Time 2",
    },
    {
      id: "3",
      src: "https://img1.hulu.com/user/v3/artwork/83387bfe-308e-45b7-a8b6-763773db8398?base_image_bucket_name=image_manager&base_image=1428f8fa-66e7-4c25-8c33-ff88bbff8c11&size=1200x630&format=webp&operations=%5B%7B%22gradient_vector%22%3A%22(0%2C0%2C0%2C0.5)%7C(0%2C0%2C0%2C0)%7C(0%2C600)%7C(0%2C240)%22%7D%2C%7B%22overlay%22%3A%7B%22position%22%3A%22SouthEast%7C(30%2C30)%22%2C%22operations%22%3A%5B%7B%22image%22%3A%22image_manager%7C1dc73e69-e1c2-4cbb-943a-0ab7aacfc836%22%7D%2C%7B%22resize%22%3A%22204x204%7Cmax%22%7D%2C%7B%22extent%22%3A%22204x204%22%7D%5D%7D%7D%2C%5D",
      name: "Adventure Time Distant Lands",
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
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#f0f4f8",
    backgroundGradient: {
      colors: ['#e8f1fd', '#edf4f9', '#e0ecf8'],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    },
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.03,
    patternType: 'dotMatrix',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(200, 215, 235, 0.6)',
    paddingBottom: 16,
  },
  title: {
    fontSize: 65,
    fontWeight: "400",
    letterSpacing: 1,
    color: "#345270",
    textAlign: "center",
    marginBottom: 8,
    textShadowColor: 'rgba(100, 150, 230, 0.15)',
    textShadowOffset: { width: 0, y: 1 },
    textShadowRadius: 2,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 13,
    color: "#6d87a8",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 16,
    padding: 14,
    shadowColor: "#8395a7",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 4,
    overflow: "hidden",
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    backdropFilter: "blur(12px)",
    borderLeftWidth: 3,
    borderLeftColor: "#6d87a8",
  },
  imageWrapper: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 12,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(52, 82, 112, 0.03)",
    borderRadius: 12,
  },
  imageBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(200, 215, 235, 0.5)",
  },
  imageBadgeText: {
    fontSize: 11,
    color: "#4a6d8c",
    fontWeight: "500",
  },
  imageNameContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(200, 215, 235, 0.3)",
  },
  imageName: {
    fontSize: 24,
    color: "#345270",
    fontWeight: "500",
    letterSpacing: 0.2,
  },
  imageIcon: {
    width: 18,
    height: 18,
    opacity: 0.6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 73, 94, 0.25)",
    backdropFilter: "blur(8px)",
  },
  modalContent: {
    backgroundColor: "rgba(255, 255, 255, 0.97)",
    padding: 28,
    borderRadius: 20,
    width: "85%",
    shadowColor: "#2c3e50",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 1,
    borderLeftWidth: 4,
    borderLeftColor: "#6d87a8",
  },
  modalHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(200, 215, 235, 0.4)",
    paddingBottom: 16,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#345270",
    letterSpacing: 0.3,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(230, 230, 230, 0.8)",
    padding: 16,
    marginBottom: 24,
    borderRadius: 12,
    fontSize: 16,
    color: "#2c3e50",
    backgroundColor: "rgba(249, 250, 252, 0.8)",
    shadowColor: "#bdc3c7",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
    borderLeftWidth: 3,
    borderLeftColor: "#6d87a8",
  },
  inputLabel: {
    fontSize: 14,
    color: "#6d87a8",
    marginBottom: 8,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#6d87a8",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#8395a7",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 15,
  },
  buttonIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  listHeader: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listHeaderText: {
    fontSize: 14,
    color: "#6d87a8",
    fontWeight: "500",
  },
  separator: {
    height: 1,
    backgroundColor: "rgba(200, 215, 235, 0.3)",
    marginVertical: 16,
    marginHorizontal: 5,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  emptyStateText: {
    color: "#6d87a8",
    fontSize: 15,
    textAlign: "center",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(200, 215, 235, 0.3)",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#8395a7",
    textAlign: "center",
  },
});
