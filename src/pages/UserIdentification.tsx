import React from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform
}from 'react-native';
import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const[isFilled,setIsFilled] =  useState(false);
    const[name,setName] = useState<string>();

    function handleInputBlur(){
       setIsFocused(false) ;
       setIsFilled(!!name);
    }

    function handInputChange(value: string){
        setIsFilled(!!value);
        setName(value);

    }

    function handleInputFocus(){
        setIsFocused(true);
    }

     return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS =='ios'?'padding' : 'height'}
            >
            <View style={styles.content}>
                <View style ={styles.form}>
                    <View style ={styles.header}>
                        <Text style={styles.emoji}>
                        😊
                        </Text>

                        <Text style={styles.title}>
                        {'\n'}   
                        Como podemos{'\n'}
                        chamar você?
                        </Text>

                    </View>
                        <TextInput
                            style = {[styles.input,
                                        (isFocused || isFilled) && {borderColor: colors.green}
                            ]}
                            placeholder= " Digite seu nome aqui"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText = {handInputChange}
                        />

                        <View style = {styles.footer}>
                            <Button/>
                        </View>
                     
                </View>
               
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
     )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-around'
        },

        content:{
            flex:1,
            width:'100%'
        },
        
        form:{
            flex:1,
            justifyContent: 'center',
            paddingHorizontal: 54,
            alignItems: 'center',
            
        },
        header:{
            alignItems: 'center'
        },
        emoji:{
            fontSize: 44
            
        },
        input: {
            borderBottomWidth: 1,
            borderColor: colors.gray,
            color: colors.heading,
            width: '100%',
            fontSize:18,
            marginTop: 50,
            padding: 1,
            textAlign: 'center'

        },
        title:{
            fontSize: 28,
            lineHeight: 32,
            textAlign: 'center',
            color: colors.heading,
            fontFamily: fonts.heading,
            marginTop: 20,
        },
        footer:{
            marginTop: 40,
            width: '100%',
            paddingHorizontal: 20
        }
        
        });