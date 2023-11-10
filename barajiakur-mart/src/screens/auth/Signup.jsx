import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        age: '',
        city: '',
        photo: null,
    });

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = () => {
        // Implement your form submission logic here using formData
        // For example, you can send a POST request to your backend API endpoint for user registration
        if (!validatePassword(formData.pass)) {
            alert("Please enter a valid password")
        }
    };
    const handleRoute = (page) => {
        navigation.navigate(page);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                value={formData.name}
            />
            <TextInput
                style={styles.input}
                placeholder="Email address"
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                value={formData.email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setFormData({ ...formData, pass: text })}
                value={formData.pass}
            />
            <TextInput
                style={styles.input}
                placeholder="Age"
                keyboardType="numeric"
                onChangeText={(text) => setFormData({ ...formData, age: text })}
                value={formData.age}
            />
            <TextInput
                style={styles.input}
                placeholder="City"
                onChangeText={(text) => setFormData({ ...formData, city: text })}
                value={formData.city}
            />
            {/* Add file picker for photo upload */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            {/* Add navigation to login screen */}
            <Text style={styles.text} onPress={() => handleRoute("Login")}>
                Already have an account?{' '}
                <Text style={styles.linkText}>Log in here</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        width: '70%',
        height: 40,
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        marginTop: 20,
    },
    linkText: {
        color: 'teal',
        fontWeight: 'bold',
    },
});

export default SignUp;
