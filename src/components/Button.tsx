import React from 'react';
import{TouchableOpacity,StyleSheet,Text} from 'react-native';
import colors from '../colors';



export function Button(){
return(
<TouchableOpacity 
style={styles.button} 
activeOpacity={0.7}
>
    <Text 
    style={styles.buttonText}
    >
       > 
    </Text>
    </TouchableOpacity>

)
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 30,
        height: 56,
        width: 56
    },

    buttonText:{
        color: colors.white,
        fontSize: 30
    }
});



