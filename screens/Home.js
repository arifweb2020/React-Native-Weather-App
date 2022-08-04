import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native'

const Home = ({ navigation }) => {

    return (
        <>
            <Image
                source={{
                    uri: 'https://reactjs.org/logo-og.png',
                    cache: 'only-if-cached'
                }}
                style={{ width: 400, height: 400 }}
            />
            <View style={{ display:'flex',  alignItems: 'center' , marginTop:30 }}>
                <Text style={{ fontSize: 30 }}>Welcome to React Native</Text>
                <TouchableOpacity onPress={() => navigation.navigate('about-page', { name: 'Arif', age: 28, email: 'test@test.com' })}>
                    <Text style={{ fontSize: 16, cursor: 'pointer', borderRadius: 10, backgroundColor: 'darkorange', padding: 10, color: '#fff' , marginTop:20 }}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('weather')}>
                    <Text style={{ fontSize: 16, cursor: 'pointer', borderRadius: 10, backgroundColor: 'darkorange', padding: 10, color: '#fff' , marginTop:20 }}>Check Weather</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

export default Home