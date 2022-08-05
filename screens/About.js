import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import arrow from '../assets/images/arrow.png';
import food1 from '../assets/images/food1.png';
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    listContainer: {
        padding: 20,

    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

const About = ({ navigation, route }) => {

    const [data, setData] = React.useState([]);
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const res1 = await res.json();
            console.log("res is " + JSON.stringify(res1))
            return res1;

        };
        getData().then(resp => setData(resp));
        setLoader(false)
    }, []);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ flex: 1 }}
        >

            <Image
                source={food1}
                style={{ width: 400, height: 300 }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('home-page')}
             style={{  position: 'absolute', left: 10, top: 10 }}
            >
            <Image
                source={arrow}
                style={{ width: 35, height: 35 }}
                
            />
            </TouchableOpacity>
            

            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>

                <Text style={{ fontSize: 30, color: 'purple' }}> {route.params.name}</Text>
                <Text style={{ fontSize: 20, color: 'black' , padding:10 , textAlign:'center' }}> Chefooz is an Indian online food ordering and delivery platform. Founded in July 2020, Chefooz is based in Bangalore and operates in 500 Indian cities as of September 2021.</Text>

            </View>
            <View style={styles.listContainer}>
                <Text style={{ fontSize: 23, color: 'black' }}>Delivery Boy List</Text>
                {
                    loader ? <Text style={{ fontSize: 25, color: 'black', textAlign: 'center', marginTop: 30, marginBottom: 25 }}>Loading...</Text> :

                        data.map(x => {
                            return (
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 25, justifyContent: 'space-between' }} key={x.id}>
                                    <Text style={styles.sectionTitle} >
                                        {x?.name}
                                    </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('student-details', { id: x?.id })}>
                                        <Text style={{ fontSize: 14, cursor: 'pointer', backgroundColor: 'black', padding: 9, color: '#fff' }}>view</Text>
                                    </TouchableOpacity>
                                </View>

                            );
                        })

                }

            </View>
            {/* <View style={styles.bottomContainer}>
                <View style={{ backgroundColor: 'red' }}>
                    <Text style={{ fontSize: 24 }}> One</Text>
                </View>
                <View style={{ backgroundColor: 'red' }}>
                    <Text style={{ fontSize: 24 }}> Two</Text>
                </View>
                <View style={{ backgroundColor: 'red' }}>
                    <Text style={{ fontSize: 24 }}> Two</Text>
                </View>
            </View> */}
            <View style={{ marginTop: 20, marginBottom: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => navigation.navigate('home-page')}>
                    <Text style={{ fontSize: 14, cursor: 'pointer', borderRadius: 10, backgroundColor: 'darkorange', padding: 10, color: '#fff' }}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

export default About