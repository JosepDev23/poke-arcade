import './globals.css'
import styles from './layout.module.css'

export const metadata = {
  title: 'PokeArcade',
  description: 'Pokemon web app by JosepDev23',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.nav_bar}>
          <img className={styles.logo} src='/pokearcade_logo.jpeg' />
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </body>
    </html>
  )
}
