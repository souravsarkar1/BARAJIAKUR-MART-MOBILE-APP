import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
 import { Badge } from 'react-native-elements';


const ProductCard = ({ img1, img2, rating, title, desc, price, stock, _id }) => {
  const [isHovered, setIsHovered] = useState(false);
//   const [loader, setLoader] = useState(false);

  const addToCart = () => {
    setLoader(true);
    // Implement your addToCart logic here
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => addToCart()} // Handle onPress event for adding to cart
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <Image source={{ uri: img1 }} style={styles.image} />
      ) : (
        <Image source={{ uri: img2 }} style={styles.image} />
      )}

      <View style={styles.detailsContainer}>
        <View style={styles.badgeContainer}>
          <Badge value="New" status="primary" />
          <Badge value={`Rating: ${rating}`} status="success" />
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
          {stock ? (
            <Badge value="In Stock" status="success" />
          ) : (
            <Badge value="Out of Stock" status="error" />
          )}
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See More!</Text>
        </TouchableOpacity>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    margin: "auto",
    elevation: 5,
    width: '100%',
    // border : '1 solid red'
    
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    backgroundColor: 'teal',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductCard;
