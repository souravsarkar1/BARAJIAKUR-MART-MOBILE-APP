import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../Redux/Data/action';
import ProductCard from './ProductCard';

const Products = () => {
  const data = useSelector((state) => state.dataReducer.data);
  const loading = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    margina : 'auto'
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default Products;
