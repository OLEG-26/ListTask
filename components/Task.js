import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons} from '@expo/vector-icons';

const Task = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <View style={styles.square}>
            <Octicons name='primitive-dot' size={25} color='#333' />    
            </View>
            <Text style={styles.itemText}>{props.text}</Text>
        
            </View>    
            <View style={styles.check}>
            <MaterialIcons name='delete-forever' size={25} color='#dc2e23' />    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        borderRadius: 5,  
    },
    itemText: {
        maxWidth: '80%',
    },
    check: {
        color: '#FFF'
        
    },
});


export default Task;