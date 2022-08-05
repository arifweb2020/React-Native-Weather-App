import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import arrow from '../assets/images/arrow.png';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 3,
        fontSize: 20
    },
});

function Weather({navigation}) {

    const apiKey = "f56f24967aaf51182d1d4df628297c6d"
    const [inputCity, setInputCity] = useState("")
    const [data, setData] = useState({})


    const getWetherDetails = async (cityName) => {
        if (!cityName) {
            alert("Plz enter your city")
        }
        else {
            const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
            const res = await fetch(apiURL);
            const res1 = await res.json()
            console.log(res1)
            if (res1?.message?.includes("city not found")) {
                alert("city is not correct")
                setData("")
            }
            else {
                setData(res1)
            }

        }

    }


    const handleSearch = () => {
        getWetherDetails(inputCity)
        console.log("city is " + inputCity)
        setInputCity("")
    }
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"

            >
                <View style={{ position: 'relative' }}>
                    <Image
                        source={{
                            uri: 'data:image/jpeg;base64,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',
                            cache: 'only-if-cached'
                        }}
                        style={{ width: 400, height: 260 }}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('home-page')}
                        style={{ position: 'absolute', left: 10, top: 10 }}
                    >
                        <Image
                            source={arrow}
                            style={{ width: 35, height: 35 }}

                        />
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', left: 40 }}>
                    <View style={{ paddding: 20, marginTop: 50 }}>
                        <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Check Weather</Text>
                    </View>
                    <View style={{ paddding: 30, marginTop: 20, width: 300 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your city"
                            value={inputCity}
                            onChangeText={setInputCity}
                            placeholderTextColor='#fff'

                        />
                        <TouchableOpacity onPress={handleSearch} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ fontSize: 14, cursor: 'pointer', width: 100, backgroundColor: 'black', padding: 9, color: '#fff', textAlign: 'center' }}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    {Object.keys(data).length > 0 &&
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
                            <Image
                                source={{
                                    uri: 'https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png',
                                    cache: 'only-if-cached'
                                }}
                                style={{ width: 200, height: 200 }}
                            />


                            <Text style={{ fontSize: 35 }}>
                                {data?.name}
                            </Text>
                            <Text style={{ fontSize: 20 }}>{((data?.main?.temp) - 273.15).toFixed(2)}°C</Text>

                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default Weather;