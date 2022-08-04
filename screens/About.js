import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

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
        fontSize: 24,
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
                source={{
                    uri: 'https://media-exp1.licdn.com/dms/image/C5603AQG34QF5MMH67w/profile-displayphoto-shrink_400_400/0/1631760429735?e=1665014400&v=beta&t=RowkRLCJ7CPsvDpiO8RifaNT4rXVvzOrtitk3Sets9c',
                    cache: 'only-if-cached'
                }}
                style={{ width: 400, height: 400 }}
            />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>

                <Text style={{ fontSize: 35, color: 'purple' }}>Name - {route.params.name}</Text>

            </View>
            <View style={styles.listContainer}>
                <Text style={{ fontSize: 30, color: 'red' }}>List of students</Text>
                {
                    loader ? <Text style={{ fontSize: 25, color: 'black', textAlign: 'center', marginTop: 30, marginBottom: 25 }}>Loading...</Text> :

                        data.map(x => {
                            return (
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 25,  justifyContent: 'space-between' }} key={x.id}>
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
            <Text style={{ fontSize: 16, cursor: 'pointer', borderRadius: 10, backgroundColor: 'darkorange', padding: 10, color: '#fff' }}>Back to Home</Text>
        </TouchableOpacity>
    </View>
        </ScrollView >
    )
}

export default About