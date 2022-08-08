import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import ProgressBar from 'react-native-progress/Bar';

// install npm i react-native-webview
// npm i react-native-progress

function Webview(props) {
    // const js = `window.alert("Hello world")`
    const [progress, setProgress] = React.useState(0);
    const [loaded, setLoaded] = React.useState(false)
    return (
        <View>
            {
                !loaded ? (
                    <ProgressBar progress={progress} width={null} />
                ) : null
            }

            <WebView
                // source={{html:`<h1>Hello world</h1>`}}
                source={{ uri: 'https://reactnative.dev/' }}
                onError={event => {
                    alert(`webview error : ${event.nativeEvent.description}`)
                }}
                // injectedJavascriptBeforeContentLaoded={js}
                onLoadProgress={e => setProgress(e.nativeEventprogress)}
                onLoadEnd ={()=>setLoaded(true)}
            />
        </View>
    );
}

export default Webview;