import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../assets/images/logo.png';

function Splash(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'#fff' }} >
            <Image source={logo} />
            <Text style={{color:'black',fontSize:18}}>Welcome to the possible</Text>
            <Text style={{color:'black' , position:'absolute', bottom:30}} >Made with ❤ from Chefooz.</Text>
        </View>
    );
}

export default Splash;