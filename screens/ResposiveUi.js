import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';

// const height = Dimensions.get('screen').height

// u can write this wau also

//const { height, width } = Dimensions.get('screen')



function ResposiveUi(props) {
    const [isRotate, setRotate] = React.useState(false)
    useEffect(() => {
        Dimensions.addEventListener("change", () => {
            console.log("width " + width)
            console.log("height " + height)

            const orientation = isPortrait();
            console.log(orientation)
            setRotate(orientation)
        })
    }, [])

    const isPortrait = () => {
        const { height, width } = Dimensions.get('screen')
        // return height > width ? "P" : "L"
        return height > width ? false : true
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            flex: 1,
            // height: height
            flexDirection: isRotate ? "row" : "column"

        }}>
            <View
                style={{
                    height: height / 2,
                    // mostly we can use flex= 1 instead of height
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                }}
            ></View>
            <View
                style={{
                    height: height / 2,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'green',
                }}
            ></View>
        </View>

        // for landsacpe view
        // <View style={{
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     backgroundColor: 'red',
        //     flex: 1,
        //     flexDirection:'row'

        // }}>
        //     <View
        //         style={{
        //             height: '100%',
        //             // mostly we can use flex= 1 instead of height
        //             width: '100%',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             backgroundColor: 'black',
        //         }}
        //     ></View>
        //     <View
        //         style={{
        //             height: '100%',
        //             width: '100%',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             backgroundColor: 'green',
        //         }}
        //     ></View>
        // </View>
    );
}

export default ResposiveUi;