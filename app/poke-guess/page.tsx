'use client'
import { useEffect, useState } from "react"
import Pokemon from "../models/Pokemon"
import { getFourRandomPokemon } from "./domain/getRandomPokemon"
import styles from './pokeguess.module.css'


export default function PokeGuess() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemonForImg, setPokemonForImg] = useState<Pokemon>()

  useEffect(() => {
    handleRetrievePokemons()
  }, [])

  const handleRetrievePokemons = async () => {
    const retrievedPokemons = await getFourRandomPokemon()
    setPokemons(retrievedPokemons)
    setPokemonForImg(retrievedPokemons[Math.floor(Math.random() * 4)])
  }

  return (
    <div className={styles.floor}>
      <div className={styles.image_wrapper}>
        <img className={styles.pokemon_image}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonForImg?.id}.png`}
        />
      </div>
      <div className={styles.names_wrapper}>
        <button style={{ "--clr": "#39FF14" } as React.CSSProperties}><span>{pokemons[0]?.name}</span><i></i></button>
        <button style={{ "--clr": "#FF44CC" } as React.CSSProperties}><span>{pokemons[1]?.name}</span><i></i></button>
        <button style={{ "--clr": "#0FF0FC" } as React.CSSProperties}><span>{pokemons[2]?.name}</span><i></i></button>
        <button style={{ "--clr": "#8A2BE2" } as React.CSSProperties}><span>{pokemons[3]?.name}</span><i></i></button>
      </div>
    </div>
  )
}