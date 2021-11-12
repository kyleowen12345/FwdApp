/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {
  StyleSheet,
  useColorScheme,
  View,
  StatusBar,
  Pressable,
  Text,
  Alert
} from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer,useNavigationContainerRef,CommonActions   } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';

import WelcomeScreen from './components/global/screen/WelcomeScreen';
import LoginScreen from './components/global/screen/LoginScreen';
import RegisterScreen from './components/global/screen/RegisterScreen';
import {RootStackParamList} from './components/routes/index'



const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();



  const navigationRef = useNavigationContainerRef();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator initialRouteName={'Welcome'}>

        <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />

        <Stack.Screen  name="Login" component={LoginScreen} options={{
          title:"Log in",
          headerTitleStyle:{fontSize:15, color:'black'},
          headerStyle:{backgroundColor:'#F1F1F1'},
          headerShadowVisible:false,
          headerRight: () => (
          <Pressable  
            style={{borderColor:"gray",borderWidth:1,borderRadius:20, paddingVertical:5, paddingHorizontal:10, backgroundColor:'white'}} 
            onPress={()=>navigationRef.dispatch(CommonActions.navigate({name:'Register'}))}
          >
                <Text style={{fontSize:11,fontWeight:'bold',color:'black'}}>CREATE AN ACCOUNT</Text>
          </Pressable>
          ),
          headerLeft: () => (
            <Icon name="left" size={25} color='#e87722'  style={{marginRight:15}} onPress={()=> navigationRef.dispatch(CommonActions.goBack())}/>
          )
          }} />

         <Stack.Screen  name="Register" component={RegisterScreen} options={{
            title:"Create an Account",
            headerTitleStyle:{fontSize:15, color:'black'},
            headerStyle:{backgroundColor:'#F1F1F1'},
            headerShadowVisible:false,
            headerRight: () => (
            <Pressable  
              style={{borderColor:"gray",borderWidth:1,borderRadius:20, paddingVertical:5, paddingHorizontal:10, backgroundColor:'white'}}
              onPress={()=>navigationRef.dispatch(CommonActions.navigate({name:'Login'}))}
            >
                  <Text style={{fontSize:11,fontWeight:'bold',color:'black'}}>Login</Text>
            </Pressable>
            ),
            
            headerLeft: () => (
              <Icon name="left" size={25} color='#e87722'  style={{marginRight:15}} onPress={()=> navigationRef.dispatch(CommonActions.goBack())}/>
            )
          }} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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

export default App;
