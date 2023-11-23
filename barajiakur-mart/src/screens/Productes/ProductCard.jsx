import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 4, // Add elevation for a card-like effect
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  cardContent: {
    marginTop: 10,
  },
  cardCover: {
    marginTop: 10,
    borderRadius: 8,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: "1 solid red",
    marginTop: 10,
  },
  button1: {
    backgroundColor: '#3498db',
    marginRight: 8,
  },
  button2: {
    backgroundColor: 'orange',
    marginRight: 8,
  },
  button3: {
    backgroundColor: 'green',
    marginRight: 8,
  },
});


const ProducctCard = ({ img1, desc, title, price, stock, rating }) => (
  <Card style={styles.card}>
    <Card.Cover style={styles.cardCover} source={{ uri: img1 }} />
    <Card.Title
      titleStyle={styles.cardTitle}
      subtitleStyle={styles.cardSubtitle}
      title={title}
      subtitle={`Price: $${price}`}
      
    />
    <Card.Content style={styles.cardContent}>
      <Text>{desc}</Text>
    </Card.Content>
    <Card.Actions style={styles.cardActions}>
      <Button style={styles.button1}>{rating}</Button>
      <Button style={styles.button2}>{stock ? 'Stock' : 'Stock'}</Button>
      <Button style={styles.button3}>Buy Now</Button>
    </Card.Actions>
  </Card>
);

export default ProducctCard;
