'use client'
import { useEffect, useState } from "react"
import Pokemon from "../models/Pokemon"
import { getFourRandomPokemon } from "./domain/getRandomPokemon"
import styles from './pokeguess.module.css'
import Popup from "../components/popup/popup"
import { useRouter } from "next/navigation"


export default function PokeGuess() {
  const router = useRouter()

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pokemonForImg, setPokemonForImg] = useState<Pokemon>()

  const [openPopup, setOpenPopup] = useState(false)
  const [textPopup, setTextPopup] = useState('')

  useEffect(() => {
    handleRetrievePokemons()
  }, [])

  const handleRetrievePokemons = async () => {
    const retrievedPokemons = await getFourRandomPokemon()
    setPokemons(retrievedPokemons)
    setPokemonForImg(retrievedPokemons[Math.floor(Math.random() * 4)])
  }

  const handlePokemonNameClick = (pokemonName: string) => {
    if (pokemonName === pokemonForImg?.name) setTextPopup('Congrats! You win :)')
    else setTextPopup('You failed, the pokemon was: ' + pokemonForImg?.name)
    setOpenPopup(true)
  }

  return (
    <div className={styles.floor}>
      <Popup
        open={openPopup}
        text={textPopup}
        leftBtnText='EXIT'
        leftBtnOnClick={() => {
          setOpenPopup(false)
          router.back()
        }}
        rightBtnText='Play Again!'
        rightBtnOnClick={() => {
          handleRetrievePokemons()
          setOpenPopup(false)
        }}
      />
      <div className={styles.image_wrapper}>
        {pokemonForImg ?
          <img className={styles.pokemon_image}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonForImg?.id}.png`}
          />
          : <></>
        }
      </div>
      <div className={styles.names_wrapper}>
        <button
          style={{ "--clr": "#39FF14" } as React.CSSProperties}
          onClick={() => handlePokemonNameClick(pokemons[0]?.name)}
        >
          <span>{pokemons[0]?.name}</span><i></i>
        </button>
        <button
          style={{ "--clr": "#FF44CC" } as React.CSSProperties}
          onClick={() => handlePokemonNameClick(pokemons[1]?.name)}
        >
          <span>{pokemons[1]?.name}</span><i></i>
        </button>
        <button
          style={{ "--clr": "#0FF0FC" } as React.CSSProperties}
          onClick={() => handlePokemonNameClick(pokemons[2]?.name)}
        >
          <span>{pokemons[2]?.name}</span><i></i>
        </button>
        <button
          style={{ "--clr": "#8A2BE2" } as React.CSSProperties}
          onClick={() => handlePokemonNameClick(pokemons[3]?.name)}
        >
          <span>{pokemons[3]?.name}</span><i></i>
        </button>
      </div>
    </div>
  )
}