import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import arrow from '../assets/images/arrow.png';
const styles = StyleSheet.create({
    font: {
        fontSize:22,
        color:'purple',
        lineHeight:32,
    }
})

function SingleStudent({ navigation,route }) {
    const { id } = route.params;
  
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const res1 = await res.json();
            console.log("res is " + JSON.stringify(res1))
            setData(res1)
        };
        getData()
    }, []);
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}
             style={{  position: 'absolute', left: 10, top: 10 }}
            >
            <Image
                source={arrow}
                style={{ width: 35, height: 35 }}
                
            />
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', color: 'black', fontSize: 30 , marginTop:40}}>Student Details</Text>
            <View style={{marginTop:20}}>
                <Text style={styles.font}>Name : {data?.name}</Text>
                <Text style={styles.font}>Email : {data?.email}</Text>
                <Text style={styles.font}>Phone : {data?.phone}</Text>
                <Text style={styles.font}>Address : {data?.address?.city}</Text>
                <Text style={styles.font}>company : {data?.company?.name}</Text>
            </View>

            {/* <View style={{ marginTop: 20, marginBottom: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 16, cursor: 'pointer', borderRadius: 10, backgroundColor: 'darkorange', padding: 10, color: '#fff' }}>Go Back</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

export default SingleStudent;