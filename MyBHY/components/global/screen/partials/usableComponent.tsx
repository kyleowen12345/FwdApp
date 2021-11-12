import React from "react";

import { StyleSheet, View, StatusBar, ImageBackground, Text, Image, Pressable, Alert } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { IDefaultButton } from "../../interface/buttons";
import { IDefaultWrapper } from  "../../interface/blocks";

const Header = (props : any) => {
    return (
        <View>
            <StatusBar backgroundColor={(props.statusBarBackgroundColor ?? "#000")} barStyle={((props.statusBarStyle ?? "light-content"))} />
            <View style={{
                backgroundColor: props.statusBarBackgroundColor,
                paddingVertical: 15,
                paddingHorizontal: 20,
                flexDirection: 'row'
            }}>
                {/* Left Prop */}
                <View style={{
                    flex: 0.5,
                    justifyContent: 'center',
                }}>
                    {props.leftContent}
                </View>

                {/* Center Prop */}
                <View style={{
                    flex: 0.5
                }}>
                    {props.centerContent}
                </View>

                {/* Right Prop */}
                <View style={{
                    
                }}>
                    {props.rightContent}
                </View>
            </View>
        </View>
    );
}

const Typography = {
    HeaderTitle: (props : any) => {
        return (
            <Text style={{
                fontSize: 19,
                fontFamily: 'Poppins',
                fontWeight: "700",
                marginStart: 15,
                justifyContent: 'center'
            }}>
                {props.children}
            </Text>
        )
    }
}

const Button = {
    Primary: (props : IDefaultButton) => {
        return (
        <Pressable onPress={props.onPress}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#E87722', '#F48D10' , '#FFA000']} style={{
                paddingTop: props.paddingY ?? "",
                paddingBottom: props.paddingY ?? "",
                paddingLeft: props.paddingX ?? "",
                paddingRight: props.paddingX ?? "",
                alignItems: 'center',
                borderRadius: props.borderRadius,
            
            }}>
                <Text style={{
                    fontFamily: 'Poppins',
                    color: '#fff',
                    fontSize: (props.fontSize ?? 13),
                    textTransform: 'uppercase',
                    fontWeight: (props.fontWeight)
                }}>
                    {props.text}
                </Text>
            </LinearGradient>
        </Pressable>
        );
    },
    Secondary: (props : IDefaultButton) => {
        return (
            <Pressable onPress={props.onPress}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#fff', '#fff']} style={{
                    paddingTop: props.paddingY ?? "",
                    paddingBottom: props.paddingY ?? "",
                    paddingLeft: props.paddingX ?? "",
                    paddingRight: props.paddingX ?? "",
                    alignItems: 'center',
                    borderRadius: props?.borderRadius,
                    borderColor: '#BBBBBB',
                    borderWidth: 1
                }}>
                    <Text style={{
                        fontFamily: 'Poppins',
                        color: '#686666',
                        fontSize: (props.fontSize ?? 13),
                        textTransform: 'uppercase',
                        fontWeight: (props.fontWeight)
                    }}>
                        {props.text}
                    </Text>
                </LinearGradient>
            </Pressable>
            );
    }
}

const UIBlocks = {
    Container: (props : IDefaultWrapper) => {
        return (
            <View style={{
                height: props.height,
                width: props.width,
                justifyContent: props.justifyContent,
                alignItems: props.alignItems ?? "flex-start",
                paddingHorizontal: props.paddingX,
                paddingVertical: props.paddingY
            }}>
                {props.children}
            </View>
        )
        
    }
}
export { Header, Typography, Button, UIBlocks };