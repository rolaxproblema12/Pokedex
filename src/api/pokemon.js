import { API_HOST } from "../utils/constants";
export async function getPokemonsApi(endPointUrl){
    try{
        const url = `${API_HOST}/pokemon?Limit=20&offset=0`;
        const response = await fetch(endPointUrl||url);
        const result = await response.json();
        return result;
    }catch (e){
        throw e;
    }
}
export async function getPokemonDetailsByUrlApi(url){
    try{
        const response = await fetch(url);
        const result = await response.json(); 
        return result;
    }catch(e){

    }
}
export async function getPokemonDetailsApi(id){
    try{
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }
    catch(  e){
        console.log(e.message);
    }
}