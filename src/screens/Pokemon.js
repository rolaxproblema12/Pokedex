import { View, Text } from 'react-native'
import React from 'react'
import { getPokemonDetailsApi }from '../api/pokemon'
import { useEffect, useState } from 'react'

export default function Pokemon(props) {
  const {navigation,route:{params},} = props;
  const [pokemon, setPokemon] = useState(null);
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
    <View>
      <Text>Estamos en un pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  )
}