import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.items}>
                <Text style={styles.title}>Welcome to ListTask!</Text>
                <Text style={styles.paragraph}>Having A Hard Time in Remembering Things?</Text>
            
                <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFC619',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000137',
        borderRadius: 10,
        color: '#fff',
        marginTop: 45,
        padding: 10,
    },
    paragraph: {

        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000137',
        color: '#fff',
        margin: 20,
        padding: 5,
        borderRadius: 10,
        
    },
    logo: {
        width: 330, 
        height: 330,
    },
});