import React from "react";
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { DashboardCommunityHeader, Typography, Button as BHYButton, UIBlocks } from "../partials/usableComponent";
import AntIcon from "react-native-vector-icons/AntDesign";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import { useForm, Controller } from "react-hook-form";
import { TDashboardCommunitySearch } from "../../types/dashboard";

const DashboardHome = ({navigation} : any) => {
    const { control, handleSubmit,reset, formState: { errors } } = useForm<TDashboardCommunitySearch>();

    const formStyles = StyleSheet.create({
        input: {
            fontFamily: 'Poppins',
            fontSize: 15,
            width: "100%",
            borderRadius:50,
            borderWidth:1,
            borderColor:'#B4B4B4',
            paddingHorizontal: 15,
            paddingVertical: 5,
            backgroundColor:'white'
        },
        
    });

    const submitLogin = (data : any) => {
        console.log(data);
        navigation.navigate("Dashboard:Home");
    }
    
    return (
        <View style={{paddingHorizontal: 30}}>
            <DashboardCommunityHeader 
                statusBarBackgroundColor={'#F0F0F0'} 
                statusBarStyle={'dark-content'} 
                leftContent={(
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            paddingVertical: 10
                        }}>
                        
                            <AntIcon name="user" color="#E87722" onPress={() => {
                                
                            }} style={{
                                fontSize: 25,
                                fontWeight: '900',
                                justifyContent: 'center'
                            }} />
                        </View>
                        
                        <View style={{
                            width: '100%',
                            marginHorizontal: 10
                        }}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={errors.searchTextInput ? [formStyles.input,{borderColor:'red', borderWidth:2}] : formStyles.input}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                        placeholder="Search in Community"
                                
                                    />
                                )}
                                name="searchTextInput"
                            />
                        </View>

                        <View style={{
                            paddingVertical: 10
                        }}>
                            <FA5Icon name="coins" color="#E87722" onPress={() => {
                                
                            }} style={{
                                fontSize: 25,
                                fontWeight: '900',
                                justifyContent: 'center'
                            }} />
                        </View>
                    </View>
                )}
                
            ></DashboardCommunityHeader>
        </View>
    );
}

export { DashboardHome }