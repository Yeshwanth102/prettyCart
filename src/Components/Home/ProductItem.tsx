import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet, Modal } from "react-native";

interface Props {
  product: {
    img: string;
    name: string;
    id: number;
    price: number;
    quantity: number;
  },
  handleRemoveItem: Function;
  handleAddToCart: Function;
}

const ProductItem: React.FC<Props> = ({ product, handleAddToCart, handleRemoveItem}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [qnt, setQnt] = useState(0); 

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const addItem = () => {
    setQnt(qnt+1)
    handleAddToCart(product)
  }

  const removeItem = () => {
    qnt>0 && setQnt(qnt-1);
    handleRemoveItem(product.id)
  }

  return (
    <TouchableOpacity activeOpacity={0.5} testID="product-image">
      <View style={styles.container}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={{ uri: product.img }} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price?.toFixed(2)}</Text>
        </View>
        <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={addItem}>
          <Text style={styles.buttonText} testID="add-to-cart-button">+</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{qnt}</Text>
        {
          <TouchableOpacity
            style={styles.button}
            onPress={removeItem}>
            <Text style={styles.buttonText} testID="remove-from-cart-button">-</Text>
          </TouchableOpacity>
        }
      </View>
        <Modal visible={modalVisible} transparent={true} testID="product-modal">
          <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
            <Image source={{ uri: product.img }} style={styles.modalImage} />
          </TouchableOpacity>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    elevation: 2,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: 'pink',
    borderRadius: 5,
    height: 30,
    width: 30,
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
    },
    buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    alignContent: "center",
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 0.1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#555"
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantity: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default ProductItem;
