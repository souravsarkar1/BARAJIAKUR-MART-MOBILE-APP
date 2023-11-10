import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Barajiakur-Mart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#1e52a6', // You can customize the background color
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white', // You can customize the text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
