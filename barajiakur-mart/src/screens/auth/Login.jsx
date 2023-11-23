import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../Redux/Authencation/action';

const Login = ({ navigation }) => {
    const [formData, setFormData] = useState({
        email: '',
        pass: '',
    });
    const dispath = useDispatch();
    const isAuth = useSelector(st=>st.authReducer);
    console.log(isAuth);

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // console.log(formData);
        dispath(login(formData));
    };
    const handleRoute = (page) => {
        navigation.navigate(page);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email address"
                onChangeText={(text) => handleInputChange('email', text)}
                value={formData.email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => handleInputChange('pass', text)}
                value={formData.pass}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            {/* Add navigation to signup screen */}
            <Text style={styles.text} onPress={() => handleRoute("Signup")}>
                {`Don't have an account?`}
                <Text style={styles.linkText}>Create a new Account</Text>
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
        width: '100%',
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

export default Login;
