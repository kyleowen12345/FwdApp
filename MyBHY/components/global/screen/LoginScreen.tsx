import React from 'react'

import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TextInput,
    Alert,
    TouchableOpacity,
  } from 'react-native';
import { useForm, Controller } from "react-hook-form";


import {RootStackParamList} from '../../routes/index'

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

type FormData = {
  UserId: string;
  Password: string;
};

const LoginScreen = ({navigation}: Props) => {
    const { control, handleSubmit,reset, formState: { errors } } = useForm<FormData>();
    const onSubmit = async(data: any) => {
      await AsyncStorage.setItem('UserId', data.UserId)
      reset()
    };
    
   
    
    return (
      <ScrollView style={{width:"100%"}} >
        <View style={{ flex: 1, alignItems: 'center', marginTop:50,backgroundColor:"#F1F1F1" }}>  

              <StatusBar backgroundColor='#F1F1F1' barStyle="dark-content"/>

                  <View style={{width:"90%", marginBottom:20}}>
                      <Controller
                        control={control}
                        rules={{
                        required: {value: true, message: 'User Id is required' },
                        maxLength: {value: 50, message: 'max length is 50' },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            style={errors.UserId ? [styles.input,{borderColor:'red', borderWidth:2}] : styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="User ID"
                          
                          />
                        )}
                        name="UserId"
                      />

                      {errors.UserId && <Text style={{color:'red', marginLeft:20}}>{errors.UserId && errors.UserId.message}</Text>}
                  </View>
                  
                  <View style={{width:"90%", marginBottom:20}}>
                      <Controller
                        control={control}
                        rules={{
                        maxLength: 100,
                        required: {value: true, message: 'Password is required' } 
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            style={errors.Password ? [styles.input,{borderColor:'red', borderWidth:2}] : styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="Password"
                            secureTextEntry={true}
                          />
                        )}
                        name="Password"
                        
                      />
                      {errors.Password && <Text style={{color:'red',marginLeft:20}}>{errors.Password && errors.Password.message}</Text>}
                  </View>

                  <LinearGradient
                      start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#E87722', '#F48D10' , '#FFA000']}
                      style={{width:'90%' , borderRadius:50}}
                  >
                      <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={{ alignItems: 'center', justifyContent: 'center',padding:10 }}
                      >
                        <Text style={{color:'white',fontWeight:'bold'}}>LOG IN</Text>
                      </TouchableOpacity>
                  </LinearGradient>
 
                  <View style={{alignItems:'center', marginTop:15}}>
                    <Text style={{color:'#716F6D',fontSize:10,marginBottom:5}}>Having trouble with your account?</Text>
                    <Text style={{color:'black',fontSize:12,fontWeight:'bold'}}>Account Recovery</Text>
                  </View>  
                    
       </View>
    </ScrollView> 
    )
}
const styles = StyleSheet.create({
  input:{
    width: "100%",
    borderRadius:10,
    borderWidth:1,
    borderColor:'gray',
    padding:10,
    paddingLeft:20,
    backgroundColor:'white'
  },
  
});



export default LoginScreen
