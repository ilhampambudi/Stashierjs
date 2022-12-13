import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from '../../components'


const ActionButton = ({title, onPress}) => {
    return (
        <View style={styles.wrapper.component}>
            <Button title={title} onPress={onPress}/>
        </View>
    )
}

const styles = {
    wrapper: {
        component: {marginBottom:0 ,maxWidth: 225}
    }
}

export default ActionButton