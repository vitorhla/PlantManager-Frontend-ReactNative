import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){

    const navigation = useNavigation();

    function handleBack(){
        navigation.navigate('UserIdentification');

    }

    return(
       <SafeAreaView style={styles.container}>
           <View style= {styles.content}>

           <Text style = {styles.title}>
            Prontinho,
            </Text>

            <Text style = {styles.emoji}>
            🌱 😊 🌱
            </Text>
           
            <Text style = {styles.subtitle}>
                Agora vamos começar a cuidar das suas 
                plantinhas com muito cuidado.
            </Text>

            <View style = {styles.footer}>
                <Button title = "Comerçar"/>
            </View>
            <View style ={styles.footer}>

            <TouchableOpacity
            style={styles.button} 
            activeOpacity={0.7}
            onPress={handleBack}
            >
                   <Feather 
                   name="chevron-left"
                   style = {styles.buttonIcon}    
                   />                
                </TouchableOpacity>
            
            </View>

           </View>

            

       </SafeAreaView>
        
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-around',
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30,
    },
    title:{
        fontSize:23,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight:38,
        marginTop: 15,
      
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading,

    },
    emoji:{
        fontSize: 78,
        
                       
    },
    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 50,
    },

    button:{
        backgroundColor:colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 30,
        height: 56,
        width: 56
    },
    buttonIcon:{
        fontSize: 32,
        color: colors.white
 
     },


})