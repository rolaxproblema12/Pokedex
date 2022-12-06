import { View, Text } from 'react-native'
import React ,{useState, useEffect} from 'react'
import {getPokemonsApi, getPokemonDetailsByUrlApi} from "../api/pokemon"
import PokemonList from '../components/PokemonList';
// import PokemonCard from '../components/PokemonCard';

export default function Pokedex() {
  const [pokemons,setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(()=>{
    (async()=>{
      await loadPokemons();
    })()
    // console.log("Hola mundo");
  },[]);
  const loadPokemons =async () =>{
    try{
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next)
      const pokemonsArray = [];
      for await(const pokemon of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemon([...pokemons,...pokemonsArray]);
    }catch(e){
      console.log(e);
    }
  }
  return (
    <View>
      <PokemonList pokemons = {pokemons} loadPokemons = {loadPokemons} isNext={nextUrl}/>
      {/* <Text>Hello</Text> */}
      <PokemonList></PokemonList>
    </View>
  );
}