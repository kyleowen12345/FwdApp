import React, { useEffect } from 'react'

import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

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

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

type FormData = {
  UserId: string;
  Password: string;
  Firstname:string;
  Lastname:string;
  Email:string;
};

const RegisterScreen = ({navigation}: Props) => {
    const { control, handleSubmit,reset, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: any) => {
      console.log(data)
      reset()
    };
    
    useEffect(() => {
        if(errors){
            console.log(errors)
        }
    }, [errors])
    
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

                  {/* Profile Information */}

                  <Text style={{color:'gray',fontSize:15,fontWeight:'bold', marginBottom:20}}>Profile Information </Text>

                  <View style={{width:"90%", marginBottom:20}}>
                      <Controller
                        control={control}
                        rules={{
                        required: {value: true, message: 'Firstname is required' },
                        maxLength: {value: 50, message: 'max length is 50' },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            style={errors.Firstname ? [styles.input,{borderColor:'red', borderWidth:2}] : styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="First name"
                          
                          />
                        )}
                        name="Firstname"
                      />

                      {errors.Firstname && <Text style={{color:'red', marginLeft:20}}>{errors.Firstname && errors.Firstname.message}</Text>}
                  </View>
                  
                  <View style={{width:"90%", marginBottom:20}}>
                      <Controller
                        control={control}
                        rules={{
                        maxLength: {value: 50, message: 'max length is 50' },
                        required: {value: true, message: 'Last name is required' } 
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            style={errors.Lastname ? [styles.input,{borderColor:'red', borderWidth:2}] : styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="Last name"
                            secureTextEntry={true}
                          />
                        )}
                        name="Lastname"
                        
                      />
                      {errors.Lastname && <Text style={{color:'red',marginLeft:20}}>{errors.Lastname && errors.Lastname.message}</Text>}
                  </View>

                  <View style={{width:"90%", marginBottom:20}}>
                      <Controller
                        control={control}
                        rules={{
                        required: {value: true, message: 'Email is required' },
                        maxLength: {value: 50, message: 'max length is 50' },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <TextInput
                            style={errors.Email ? [styles.input,{borderColor:'red', borderWidth:2}] : styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder="Email"
                          
                          />
                        )}
                        name="Email"
                      />

                      {errors.Email && <Text style={{color:'red', marginLeft:20}}>{errors.Email && errors.Email.message}</Text>}
                  </View>



                  <LinearGradient
                      start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#E87722', '#F48D10' , '#FFA000']}
                      style={{width:'60%' , borderRadius:50, marginBottom:20}}
                  >
                      <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={{ alignItems: 'center', justifyContent: 'center',padding:10 }}
                      >
                        <Text style={{color:'white',fontWeight:'bold'}}>CREATE AN ACCOUNT</Text>
                      </TouchableOpacity>
                  </LinearGradient>


                   
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



export default RegisterScreen
