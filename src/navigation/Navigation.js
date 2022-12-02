import {createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import {Image} from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import Favorite from './FavoriteNavigation';
import Account from './AccountNavigator';
import Pokedex from './PokedexNavigator';
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name ="Favorite" 
        component={Favorite} 
        options = {{
            title:"Favoritos",
            tabBarlabel:"Favoritos",
            tabBarIcon: ({color,size}) => <Icon name="heart" color={color} size={size}/>, 
        }}
        />
        <Tab.Screen 
        name ="Pokedex" 
        component={Pokedex}
        options = {{
            title:" ",
            tabBarlabel:"",
            tabBarIcon: () =>renderPokeball(), 
        }}
        />
        <Tab.Screen name ="Account" 
        component={Account} 
        options = {{
            tabBarlabel:" Mi Cuenta",
            tabBarIcon: ({color,size}) => <Icon name="user" color={color} size={size}/>, 
        }}
        />

    </Tab.Navigator>
  );
}
function renderPokeball (){
    return(
        <Image
            source={require('../assets/pokeball.png')}
            style={{width: 75, height:75, marginBottom:40}}
        />
    )
}