import React from "react";

import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Header, Typography, Button as BHYButton, UIBlocks } from "../partials/usableComponent";
import Icon from "react-native-vector-icons/AntDesign";
import { useForm, Controller } from "react-hook-form";
import { TLoginForm } from "../../types/auth";

const Login = ({navigation} : any) => {
    const { control, handleSubmit,reset, formState: { errors } } = useForm<TLoginForm>();

    const formStyles = StyleSheet.create({
        input: {
            fontFamily: 'Poppins',
            fontSize: 18,
            width: "100%",
            borderRadius:10,
            borderWidth:1,
            borderColor:'#B4B4B4',
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor:'white'
        },
        
    });

    const submitLogin = (data : any) => {
        console.log(data);
        navigation.navigate("Dashboard:Home");
    }

    return (
        <View>
            <Header 
                statusBarBackgroundColor={'#f1f1f1'} 
                statusBarStyle={'dark-content'} 
                leftContent={(
                    <View style={{
                        flexDirection: 'row'
                    }}>
                    <Icon name="left" color="#E87722" onPress={() => {
                        navigation.navigate("Welcome");
                    }} style={{
                        fontSize: 25,
                        fontWeight: '900'
                    }} />
                    
                    <Typography.HeaderTitle>Log in</Typography.HeaderTitle>
                    </View>
                )}
                rightContent={(
                    <BHYButton.Secondary 
                        borderRadius={40}
                        paddingX={10} 
                        paddingY={5} 
                        fontSize={12} 
                        fontWeight={"800"} 
                        text={'Create an Account'} 
                        onPress={() => {
                            
                        }}
                    />
                )}
            ></Header>
            <UIBlocks.Container height={'100%'} paddingX={25} style={{
                marginTop: 15
            }}>
                <View style={{
                    width: '100%',
                    marginBottom: 20
                }}>
                    <Controller
                        control={control}
                        rules={{
                        required: {value: true, message: 'User Id is required' },
                        maxLength: {value: 50, message: 'max length is 50' },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={errors.UserId ? [formStyles.input,{borderColor:'red', borderWidth:2}] : formStyles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="User ID"
                          
                            />
                        )}
                        name="UserId"
                    />
                </View>
                <View style={{
                    width: '100%',
                    marginBottom: 30
                }}>
                    <Controller
                        control={control}
                        rules={{
                        required: {value: true, message: 'Password is required' },
                        maxLength: {value: 150, message: 'You have exceeded the maximum allowable length for a password.' },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={errors.UserId ? [formStyles.input,{borderColor:'red', borderWidth:2}] : formStyles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Password"
                                secureTextEntry={true}
                          
                            />
                        )}
                        name="Password"
                    />
                </View>
                <View style={{
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <BHYButton.Primary
                         
                        borderRadius={40}
                        paddingX={40} 
                        paddingY={15} 
                        fontSize={14} 
                        fontWeight={"800"} 
                        text={'Log in'} 
                        onPress={handleSubmit(submitLogin)} 
                    />
                </View>
                
            </UIBlocks.Container>
        </View>
    )
}

export default Login;