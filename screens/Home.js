import React from 'react';
import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native';
import food from '../assets/images/food.jpg';

const Home = ({ navigation }) => {

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ flex: 1 }}
        >
            <Image
                source={food}
                style={{ width: 400, height: 300 }}
            />
            <View style={{ display:'flex',  alignItems: 'center' , marginTop:30 }}>
                <Text style={{ fontSize: 23 , color:'black' ,fontWeight:'bold'}}>Welcome to Chefooz</Text>
                <Text style={{ fontSize: 20 , padding:10, textAlign:'center'}}> We're digital nomads, living a digital life! And one thing that we have learned over the course of this evolution is that whatever we want or need, can be obtained with just a few clicks on our beloved smart devices. Even the food - all kinds, to satiate our different cravings on different days of the week. It's really an era that has something for everyone - whether a consumer or a provider.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('about-page', { name: 'About Us', age: 28, email: 'test@test.com' })}>
                    <Text style={{ fontSize: 14, cursor: 'pointer', borderRadius: 10, backgroundColor: 'darkorange', padding: 10, color: '#fff' , marginTop:20 }}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('weather')}>
                    <Text style={{ fontSize: 14, cursor: 'pointer', borderRadius: 10, backgroundColor: 'darkorange', padding: 10, color: '#fff' , marginTop:20 ,marginBottom:20}}>Check Weather</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default Home