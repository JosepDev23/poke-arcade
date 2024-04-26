'use client'
import { useState } from 'react'
import styles from './pokeclicker.module.css'

export default function PokeClicker() {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.floor}>
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginRight: '300px',
        }}
      >
        <img
          onClick={() => setCounter((prev) => ++prev)}
          className={styles.image}
          src="/pokeclicker_over.png"
        ></img>
      </article>
      <button style={{ '--clr': '#0FF0FC' } as React.CSSProperties}>
        <span>{'Counter: ' + counter}</span>
        <i></i>
      </button>
    </div>
  )
}
