'use client'
import { useState } from 'react'
import styles from './pokeclicker.module.css'

export default function PokeClicker() {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.floor}>
      <button
        style={
          { '--clr': '#0FF0FC', marginRight: '300px' } as React.CSSProperties
        }
      >
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <img
            onClick={() => setCounter((prev) => ++prev)}
            className={styles.image}
            src="/pokeclicker_over.png"
          ></img>
          Click me!!
        </span>
        <i></i>
      </button>
      <button style={{ '--clr': '#0FF0FC' } as React.CSSProperties}>
        <span>{'Counter: ' + counter}</span>
        <i></i>
      </button>
    </div>
  )
}
