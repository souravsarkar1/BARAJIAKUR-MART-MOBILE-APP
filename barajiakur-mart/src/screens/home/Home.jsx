import React from 'react';
import { SafeAreaView, Button, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ImageScreen from './Home1';

import Home4 from './Home2';

const Home = ({ navigation }) => {
    const handleRoute = (page) => {
        navigation.navigate(page);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 20 }}>WellCome To Barajiakur-Mart</Text>
                    {/* <ImageScreen/>*/}
                    {/*<CustomImageSlider images={images}/>*/}
                    <ImageScreen />
                    <Home4 />
                    <Button color={"red"} title='Back to Aboutpage' onPress={() => handleRoute("About")} />
                    <Button title='Back to Loginpage' onPress={() => handleRoute("Login")} />
                    <Button title='Back to Signuppage' onPress={() => handleRoute("Signup")} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        padding: 20,
        margin: 20,
    },
});

export default Home;
