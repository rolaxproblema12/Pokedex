import { View, Text } from 'react-native'
import React ,{useState, useEffect} from 'react'
import {getPokemonsApi} from "../api/pokemon"

export default function Pokedex() {
  useEffect(()=>{
    (async()=>{
      await loadPokemons();
    })()
    console.log("Hola mundo");
  },[]);
  const loadPokemons =async () =>{
    try{
      const response = await getPokemonsApi();
      console.log(response)
    }catch(e){
      console.log(e);
    }
  }
  return (
    <View>
      <Text>Pokedex</Text>
    </View>
  );
}