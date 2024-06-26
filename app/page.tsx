'use client'
import { useRouter } from 'next/navigation'
import styles from './home.module.css'

export default function Home() {
  const router = useRouter()

  function handleClickPokeGuess() {
    router.push('/poke-guess')
  }

  function handleClickPokeClicker() {
    router.push('/poke-clicker')
  }

  return (
    <div className={styles.floor}>
      <div className={styles.cards_container}>
        <article onClick={handleClickPokeGuess} className={styles.card_wrapper}>
          <img src="/pokeguess_background.jpg" />
          <img src="/pokeguess_over.png" />
        </article>
        <article
          onClick={handleClickPokeClicker}
          className={styles.card_wrapper}
        >
          <img src="/pokeclicker_background.jpg" />
          <img src="/pokeclicker_over.png" />
        </article>
      </div>
    </div>
  )
}
