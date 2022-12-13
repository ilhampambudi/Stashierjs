import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import ActionButton from './welcome'
import { color } from '../../utils'
import { SplashBackground, Logo } from '../../assets'

const Intro = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate (screen)
    }
  return (
    <View style={styles.wrapper.page}>
        <View style={styles.wrapper.illustration}/>
        <Image source = {Logo} style={styles.wrapper.illustration}/>
            <Text style={styles.text.welcome}>
            Welcome to Stashier!
            </Text>
        <ActionButton title="login" onPress={() => handleGoTo('Login')}/>
        <ActionButton title="daftar" onPress={() => handleGoTo('Register')}/>
    </View>
  )
}

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,
            backgroundColor: 'white'
        },
        illustration: {
            width: 219, 
            height: 117, 
            marginBottom: 20,
            marginTop: -100
        

        }
    },
    text:{
        welcome:{
            fontSize:18, 
            fontWeight: 'normal', 
            color: color.text.default, 
            marginBottom: 20}
    }
}

export default Intro

