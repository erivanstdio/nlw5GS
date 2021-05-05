import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// não to utilizando msm, vendo como fica no emulador que não tem bordas
import { SafeAreaView } from 'react-native';


import iconImg from '../assets/icon.png';


export function Welcome(){
    return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
            Bem vindo!    
            </Text>
            <Image style={style.image} source={iconImg}/>
            <Text style={style.subtitle}>
                Clique abaixo {'\n'} para visitar ofertas!
            </Text>
{/*          
            <TouchableOpacity style={style.button}>
            
            <Text style={style.buttonText}>
            {'>'}
            </Text>
        
            </TouchableOpacity>
*/}
            <TouchableOpacity style={style.buttonAdvance}>
                <Text style={style.buttonAdvanceText}>
                    Seguinte
                </Text>
            </TouchableOpacity>
            </SafeAreaView>
    )
}
//sdadsa
const style = 
StyleSheet.create({
//sddsdsds
    container: {
        backgroundColor: '#1C082B',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    image:{
        height: 150,
        width: 150
    },

    title: {
        marginTop:120,
        color: 'white',
        fontSize: 30,
    },

    subtitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },

    buttonText:{
        color: 'white',
        fontSize: 24

    },
    button:{
        marginBottom: 80,
        height:56,
        width:56,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#0500FF',
        borderRadius: 16
    },
    buttonAdvance: {
        marginBottom: 80,
        height:56,
        width:200,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#0500FF',
        borderRadius: 16
    },
    buttonAdvanceText: {
        fontSize: 20,
        color: 'white'
    }
})