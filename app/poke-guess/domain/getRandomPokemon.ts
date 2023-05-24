import Pokemon from "@/app/models/Pokemon";
import { getPokemon } from "../api/pokeapi";

export const getFourRandomPokemon = async (): Promise<Pokemon[]> => {
  const randomNumbers = getFourRandomNumbers()
  const pokemons: Pokemon[] = []
  for (const randomNumber of randomNumbers) {
    pokemons.push(await getPokemon(randomNumber))
  }
  return pokemons
}

const getFourRandomNumbers = (): number[] => {
  const numbers: number[] = []
  while (numbers.length < 4) {
    const randomNumber: number = Math.floor(Math.random() * 1008) + 1
    if (!numbers.includes(randomNumber)) numbers.push(randomNumber)
  }
  return numbers
}