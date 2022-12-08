import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { getPokemonDetailsApi }from '../api/pokemon'
import { useEffect, useState } from 'react'
import  Header  from '../components/pokemon/Header'
import Type from '../components/pokemon/Type'
import Stacks from '../components/pokemon/Stacks'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Pokemon(props) {
  const {navigation,route:{params},} = props;
  const [pokemon, setPokemon] = useState(null);
  useEffect(() =>{  
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Icon name = "arrow-left" color = "white" size = {20} style={{marginLeft: 20 }} onPress={()=>navigation.goBack()}></Icon>
    })
  },[navigation, params])
  useEffect(()=>{
    (async()=>{
      try{
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      }catch(e){
        navigation.goBack();
        console.log(e);
      }
    })()
  },[params])
  if(!pokemon) return null;
  return (
    <ScrollView>
      <Header 
      name= {pokemon.name}
      order = {pokemon.order}
      image = {pokemon.sprites.other["official-artwork"].front_default}
      type = {pokemon.types[0].type.name}
      />
      <Type types ={pokemon.types}/>
      <Stacks stats = {pokemon.stats}></Stacks>
    </ScrollView>
  )
}