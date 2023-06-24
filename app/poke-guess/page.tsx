'use client'
import { useEffect, useState } from "react"
import Pokemon from "../models/Pokemon"
import { getFourRandomPokemon } from "./domain/getRandomPokemon"
import styles from './pokeguess.module.css'
import Popup from "../components/popup/popup"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"


export default function PokeGuess() {
  const router = useRouter()
  const [pokemonForImg, setPokemonForImg] = useState<Pokemon>()

  const [openPopup, setOpenPopup] = useState(false)
  const [textPopup, setTextPopup] = useState('')

  const pokemonQuery = useQuery<Pokemon[]>({
    queryKey: ['poke-guess-pokemon'],
    queryFn: () => getFourRandomPokemon().then((pokemons) => {
      setPokemonForImg(pokemons[Math.floor(Math.random() * 4)])
      return pokemons
    })
  })

  const handlePokemonNameClick = (pokemonName: string) => {
    if (pokemonName === pokemonForImg?.name) setTextPopup('Congrats! You win :)')
    else setTextPopup('You failed, the pokemon was: ' + pokemonForImg?.name)
    setOpenPopup(true)
  }

  return (
    <div className={styles.floor}>
      {pokemonQuery.isLoading || pokemonQuery.isFetching ?
        <h1>Loading...</h1> : <>
          {pokemonQuery.isSuccess && <>
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
                setOpenPopup(false)
                pokemonQuery.refetch()
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
                onClick={() => handlePokemonNameClick(pokemonQuery.data[0]?.name)}
              >
                <span>{pokemonQuery.data[0]?.name}</span><i></i>
              </button>
              <button
                style={{ "--clr": "#FF44CC" } as React.CSSProperties}
                onClick={() => handlePokemonNameClick(pokemonQuery.data[1]?.name)}
              >
                <span>{pokemonQuery.data[1]?.name}</span><i></i>
              </button>
              <button
                style={{ "--clr": "#0FF0FC" } as React.CSSProperties}
                onClick={() => handlePokemonNameClick(pokemonQuery.data[2]?.name)}
              >
                <span>{pokemonQuery.data[2]?.name}</span><i></i>
              </button>
              <button
                style={{ "--clr": "#8A2BE2" } as React.CSSProperties}
                onClick={() => handlePokemonNameClick(pokemonQuery.data[3]?.name)}
              >
                <span>{pokemonQuery.data[3]?.name}</span><i></i>
              </button>
            </div>
          </>}
        </>
      }
    </div>
  )
}