import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Input } from '../../components'
import ActionButton from '../intro/welcome'
import { LoginPic } from '../../assets'
import { IconBack } from '../../assets/icons'


const Login = ({navigation}) => {
  const handleGoTo = (screen) => {
      navigation.navigate (screen)
  }
  return (
    <View style={styles.wrapper.page}>
    <View>
    <TouchableOpacity onPress={() => handleGoTo('Intro')}>
    <IconBack width= {35} height={35} style={styles.wrapper.backButton}/>
    </TouchableOpacity>
    </View>
    <LoginPic width={1150} height={115} styles={styles.wrapper.illustration}/>
      <Text >Selamat datang kembali!</Text>
      <Text style={{marginBottom:20}}>Silahkan masukan Email dan Password anda.</Text>
      <Input placeholder={'Email'} />
      <Input placeholder={'Password'}/>
      <ActionButton title="login"/>
    </View>
  )
}

export default Login

const styles = {
  wrapper: {
      page: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
          },
      illustration: {  
        marginBottom:25,
        marginTop: -100
          },
      backButton: {
        marginTop:-165,
        marginLeft: -170
      }
      }

}