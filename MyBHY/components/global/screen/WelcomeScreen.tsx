import React from 'react';

import { StyleSheet, View, StatusBar, ImageBackground, Text, Image, Pressable, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const WelcomeScreen = () => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#E87722'} barStyle={'dark-content'} />
            <ImageBackground source={require('../assets/img/welcomescreen2.jpg')} resizeMode={'cover'} style={styles.image}>
                <LinearGradient colors={['#E87722', 'transparent']} style={{
                    width: '100%',
                    height: '100%',
                    zIndex: 100,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flex: 0.8
                    }}>
                        <View>
                            <Image source={require('../assets/img/bhy-logo.png')} style={{
                                width: 120,
                                height: 50
                            }} />
                        </View>
                    </View>

                    <View style={{
                        flex: 0,
                        width: '100%',
                        paddingLeft: 20,
                        paddingRight: 20
                    }}>
                        <View style={{
                            shadowColor: '#171717',
                            shadowOffset: {width: -2, height: 4},
                            shadowOpacity: 0.2,
                            shadowRadius: 3,
                        }}>

                            <Pressable onPress={() => {
                                Alert.alert("Login to Account", "Test");
                            }}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#E87722', '#F48D10' , '#FFA000']} style={{
                                    padding: 15,
                                    alignItems: 'center',
                                    borderRadius: 40,
                                
                                }}>
                                    <Text style={{
                                        fontFamily: 'Poppins',
                                        color: '#fff',
                                        fontSize: 13,
                                        textTransform: 'uppercase',
                                        fontWeight: "700"
                                    }}>
                                        Log In
                                    </Text>
                                </LinearGradient>
                            </Pressable>
                        </View>
                        
                        <Pressable style={{
                            marginTop: 20
                        }} onPress={() => {
                            Alert.alert("Login to Account", "Test");
                        }}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#fff', '#fff']} style={{
                                padding: 15,
                                alignItems: 'center',
                                borderRadius: 40,
                            
                            }}>
                                <Text style={{
                                    fontFamily: 'Poppins',
                                    color: '#716F6D',
                                    fontSize: 13,
                                    textTransform: 'uppercase',
                                    fontWeight: "700"
                                }}>
                                    Create an Account
                                </Text>
                            </LinearGradient>
                        </Pressable>
                    </View>
                </LinearGradient>
            </ImageBackground>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    bgOverlay: {
        posiiton: 'absolute',
        top: 0
    }
});

export default WelcomeScreen;
