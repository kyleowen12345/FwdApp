import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View,StatusBar,ScrollView } from 'react-native';




const Tab = createMaterialTopTabNavigator();

const TermsAndConditions = () => {
  return (
    <ScrollView style={{width:"100%"}} >
            <View style={{ flex: 1, alignItems: 'center',backgroundColor:'white',padding:20 }}>
                  <StatusBar backgroundColor='#F1F1F1' barStyle="dark-content"/>
                  <Text style={{letterSpacing:1,fontSize:17}}>
                        Welcome to our site! Please read the following terms and conditions carefully. When accessing this site, you agree to be bound by the following terms and conditions. If you do not agree with the terms and conditions, please do not access this site.
                        Unless otherwise noted, all materials and contents of this site is owned by FWD Life Insurance Corporation (hereinafter referred to as the “FWD”).
                        Welcome to our site! Please read the following terms and conditions carefully. When accessing this site, you agree to be bound by the following terms and conditions. If you do not agree with the terms and conditions, please do not access this site.
                        Unless otherwise noted, all materials and contents of this site is owned by FWD Life Insurance Corporation (hereinafter referred to as the “FWD”).
                        Welcome to our site! Please read the following terms and conditions carefully. When accessing this site, you agree to be bound by the following terms and conditions. If you do not agree with the terms and conditions, please do not access this site.
                        Unless otherwise noted, all materials and contents of this site is owned by FWD Life Insurance Corporation (hereinafter referred to as the “FWD”).
                        Welcome to our site! Please read the following terms and conditions carefully. When accessing this site, you agree to be bound by the following terms and conditions. If you do not agree with the terms and conditions, please do not access this site.
                        Unless otherwise noted, all materials and contents of this site is owned by FWD Life Insurance Corporation (hereinafter referred to as the “FWD”).
                  </Text>
            </View>
    </ScrollView>
  )
}

const PrivacyStatement = () => {
  return (
    <ScrollView style={{width:"100%"}} >
          <View style={{ flex: 1, alignItems: 'center',backgroundColor:'white',padding:20 }}>
                <StatusBar backgroundColor='#F1F1F1' barStyle="dark-content"/>
                <Text style={{letterSpacing:1.5,fontSize:17}}>
                      Welcome to our site! Please read the following terms and conditions carefully. When accessing this site, you agree to be bound by the following terms and conditions. If you do not agree with the terms and conditions, please do not access this site.
                      Unless otherwise noted, all materials and contents of this site is owned by FWD Life Insurance Corporation (hereinafter referred to as the “FWD”).
                      Welcome to our site! Please read the following terms and conditions carefully. When accessing this site, you agree to be bound by the following terms and conditions. If you do not agree with the terms and conditions, please do not access this site.
                      Unless otherwise noted, all materials and contents of this site is owned by FWD Life Insurance Corporation (hereinafter referred to as the “FWD”).
                      Welcome to our site! Please read the following terms and conditions carefully. When accessing this site, you agree to be bound by the following terms and conditions. If you do not agree with the terms and conditions, please do not access this site.
                      Unless otherwise noted, all materials and contents of this site is owned by FWD Life Insurance Corporation (hereinafter referred to as the “FWD”).
                </Text>
          </View>
    </ScrollView>
  )
}


const TermScreen = () => {
    return (
      <Tab.Navigator
      initialRouteName="Terms"
      screenOptions={{
        tabBarActiveTintColor: '#E87722',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 12,fontWeight:'bold' },
        tabBarIndicatorStyle:{backgroundColor:'#E87722'},
        tabBarStyle: { backgroundColor: "#F1F1F1" },
      }}
    >
     
      <Tab.Screen
        name="Terms"
        component={TermsAndConditions}
        options={{ tabBarLabel: 'Terms & Conditions' }}
      />
      <Tab.Screen
        name="Privacy"
        component={PrivacyStatement}
        options={{ tabBarLabel: 'Privacy Statement' }}
      />
    </Tab.Navigator>
    )
}



export default TermScreen
