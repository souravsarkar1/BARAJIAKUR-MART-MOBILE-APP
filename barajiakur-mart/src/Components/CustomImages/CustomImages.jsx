import React, { useRef, useEffect, useState } from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet, Animated } from 'react-native';

// const { width, height } = Dimensions.get('window');

const CustomImageSlider = ({ images, showBullets = true, showNavs = true, autoPlay = true }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        if (currentIndex < images.length - 1) {
          flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
          flatListRef.current?.scrollToIndex({ index: 0 });
        }
      }, 3000); // Change the interval (in milliseconds) for autoplay
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay, images.length]);

  const renderItem = ({ item }) => (
    <View style={{ width : "auto", height : "auto" }}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      />
      {showBullets && (
        <View style={styles.bulletsContainer}>
          {images.map((_, index) => (
            <View key={index} style={[styles.bullet, { opacity: index === currentIndex ? 1 : 0.3 }]} />
          ))}
        </View>
      )}
      {showNavs && (
        <View style={styles.navsContainer}>
          <View style={styles.navButton} onTouchEnd={() => flatListRef.current?.scrollToIndex({ index: currentIndex - 1 })} />
          <View style={styles.navButton} onTouchEnd={() => flatListRef.current?.scrollToIndex({ index: currentIndex + 1 })} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width : 300,
    height : 200,
    overflow: 'hidden',
  },
  image: {
    width : 250,
    height : 150,
    resizeMode: 'cover',
  },
  bulletsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#007AFF',
  },
  navsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: '45%',
    justifyContent: 'space-between',
    width,
    paddingHorizontal: 20,
  },
  navButton: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0, 122, 255, 0.6)',
  },
});

export default CustomImageSlider;
