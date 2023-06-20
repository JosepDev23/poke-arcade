'use client'
import { useRouter } from 'next/navigation'
import styles from './home.module.css'

export default function Home() {

  const router = useRouter()

  const handleClickPokeGuess = () => {
    router.push('/poke-guess')
  }

  return (
    <div className={styles.floor}>
      <div className={styles.cards_container}>
        <article onClick={handleClickPokeGuess} className={styles.card_wrapper}>
          <img src='/pokeguess_background.png' />
          <img src='/pokeguess_over.png' />
        </article>
        <article onClick={handleClickPokeGuess} className={styles.card_wrapper}>
          <img src='/pokeguess_background.png' />
          <img src='/pokeguess_over.png' />
        </article>
        <article onClick={handleClickPokeGuess} className={styles.card_wrapper}>
          <img src='/pokeguess_background.png' />
          <img src='/pokeguess_over.png' />
        </article>
      </div>
    </div>
  )
}