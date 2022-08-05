import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from './screens/Home';
import About from './screens/About';
import SingleStudent from './screens/SingleStudent';
import Weather from './screens/Weather';
import Splash from './screens/Splash';

const App = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 4000)
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          {show ? <Stack.Screen
            name="splash"
            component={Splash}
            options={{ headerShown: false }}
          /> : null}

          <Stack.Screen
            name="home-page"
            component={Home}
            //  options={{ title: 'Home' }}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="about-page" component={About}  options={{ headerShown: false }} />
          <Stack.Screen name="student-details" component={SingleStudent}   options={{ headerShown: false }}/>
          <Stack.Screen name="weather" component={Weather}  options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;