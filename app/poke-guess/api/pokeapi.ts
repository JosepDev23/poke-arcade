import Pokemon from "@/app/models/Pokemon"
import axios, { AxiosResponse } from "axios"

const pokeApiPath = 'https://pokeapi.co/api/v2/'
const pokemonPath = 'pokemon/'

export const getPokemon = async (pokedexIndex: number): Promise<Pokemon> => {
  const path = pokeApiPath + pokemonPath + pokedexIndex

  const response: AxiosResponse<Pokemon> = await axios.get(path)
  return response.data
}