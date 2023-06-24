import React from "react"
import styles from './loading.module.css'

const Loading: React.FC = () => {
  return (
    <div className={styles.lds_ripple}><div></div><div></div></div>
  )
}

export default Loading