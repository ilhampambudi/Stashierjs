import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../../../utils'


const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
    <Text style={styles.text.title}>
        {title}
    </Text>
    </TouchableOpacity>
  )
}

const styles = {
    wrapper: {
        component: {
            marginTop:30,
            backgroundColor: color.default, 
            borderRadius: 25,  
            paddingVertical: 13,
            paddingHorizontal: 90
            }
    },
    text: {
        title: {
            fontSize: 12, 
            fontWeight: 'bold', 
            color: 'black', 
            textTransform:'uppercase', 
            textAlign: 'center'
            }
    }
}

export default Button