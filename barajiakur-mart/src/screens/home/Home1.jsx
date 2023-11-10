import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { images, images2 } from '../../../Data/Home/Hero';

const ImageScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={images2}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ddd',
        width: 300,
    },
  imageContainer: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default ImageScreen;
