import React from "react";

import { View, Text } from 'react-native';
import { Header, Typography, Button as BHYButton, UIBlocks } from "../partials/usableComponent";
import Icon from "react-native-vector-icons/AntDesign";
import { useForm, Controller } from "react-hook-form";


const Login = ({navigation} : any) => {
    const userInputState = React.useState({
        username: null,
        password: null
    });

    return (
        <View>
            <Header 
                statusBarBackgroundColor={'#fff'} 
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
            <UIBlocks.Container height={'100%'} >
                <Text>Hello</Text>
            </UIBlocks.Container>
        </View>
    )
}

export default Login;