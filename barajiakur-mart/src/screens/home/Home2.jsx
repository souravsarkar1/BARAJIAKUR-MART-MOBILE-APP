import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Feature = ({ title, text }) => {
  return (
    <View style={styles.featureContainer}>
      <View style={styles.iconContainer}>
        {/* Your icons can be placed here */}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const Home4 = () => {
  return (
    <View style={styles.container}>
      <Feature
        title={'Lifetime Support'}
        text={`At Barajiakur-Mart, our unwavering focus is your satisfaction. Our 24/7 live chat and helpline ensure instant assistance for queries, recommendations, and order tracking. Discover detailed product insights, easy returns, and personalized guidance. We're here to enhance your grocery shopping with convenience and care. Choose us for fresher groceries and exceptional support.`}
      />
      <Feature
        title={'Unlimited Donations'}
        text={'Experience the power of giving without boundaries. With our unlimited donation initiative, you can make an everlasting impact on causes that matter. Join us in creating positive change and spreading hope far and wide. Your generosity knows no limits.'}
      />
      <Feature
        title={'Instant Delivery'}
        text={`Experience the ultimate convenience with our instant grocery delivery service. Order your essentials, and we'll have them at your doorstep in no time. Say goodbye to waiting and hello to hassle-free shopping. Your time matters, and we're here to make it count.`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  featureContainer: {
    marginBottom: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    color: '#666',
  },
});

export default Home4;
