import React from 'react';
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

const App = () => {


  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle={'light-content'} />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home-page"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen name="about-page" component={About} />
          <Stack.Screen name="student-details" component={SingleStudent} />
          <Stack.Screen name="weather" component={Weather} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;