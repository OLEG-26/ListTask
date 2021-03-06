import * as React from 'react';
import {getFocusedRouteNameFromRoute, NavigationContainer, TabActions} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import ApplicationScreen from './screens/ApplicationScreen';


const homeName = 'Home';
const appName = 'ListTask';

const Tab = createBottomTabNavigator(); 

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName){
                        iconName = focused ? 'home' : 'home-outline';
                    }else if (rn === appName){
                        iconName = focused ? 'list' : 'list-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}
                    tabBarOptions={{
                        activeTintColor: '#dc2e23',
                        inactiveTintColor: 'grey',
                        labelStyle: {paddingBottom: 10, fontSize: 10},
                        style: {padding: 10, height: 70},
                    }}
                >

                    <Tab.Screen name={homeName} component={HomeScreen}/>
                    <Tab.Screen name={appName} component={ApplicationScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}