import { StyleSheet, Text, TouchableOpacity, View, Alert, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Input } from '../../components'
import ActionButton from '../intro/welcome'
import { RegisterPic } from '../../assets'
import { IconBack } from '../../assets/icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../../components/atoms/loader'

const Register = ({navigation}) => {

  const [errors, setErrors] = React.useState({});
  [loading, setLoading] = React.useState(false);


  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const sendData = () => {
    console.log(loading)
    console.log('data yang dikirim: ', form)
  }

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    })
  }

  const handleGoTo = (screen) => {
      navigation.navigate (screen)
  }

  
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!form.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!form.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!form.fullName) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!form.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (form.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      regist();
    } else {
      Alert.alert('Error', 'Something went wrong');
    }

  }

  const regist = async () => {
      try {
        setLoading(false);
        await AsyncStorage.setItem('userData', JSON.stringify(form));
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };


  return (
    <View style={styles.wrapper.page}>
    <Loader visible={loading} />
    <View>
    <TouchableOpacity onPress={() => handleGoTo('Intro')}> 
    <IconBack width= {35} height={35} style={styles.wrapper.backButton}/>
    </TouchableOpacity>
    </View>

    <RegisterPic width={1150} height={115} styles={styles.wrapper.illustration}/>
      <Text >Selamat datang!</Text>
      <Text style={{marginBottom:4}}>Silahkan masukan data anda.</Text>
      <Input 
             iconName="user"
             placeholder="Nama" 
             value={form.fullName} 
             onChangeText={(value) => onInputChange(value, 'fullName')}
             error={errors.fullname}
             />
      <Input 
             iconName="envelope-o"
             placeholder='Email' 
             value={form.email}
             onChangeText={(value) => onInputChange(value, 'email')}
             error={errors.email}
             />
      <Input 
             iconName="lock"
             placeholder='Password' 
             value={form.password}
             onChangeText={(value) => onInputChange(value, 'password')}
             onFocus={() => handleError(null, 'password')}
             error={errors.password}
             password
             />
      <ActionButton title="daftar" onPress={() => { sendData(); validate(); }}/>
    </View>
  )
}

export default Register

const styles = {
  wrapper: {
      page: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        backgroundColor: 'white'
          },
      illustration: {  
        marginBottom:20,
        marginTop:-100 
          },
      backButton: {
            marginTop:-125,
            marginLeft: -170
          }
      }

}