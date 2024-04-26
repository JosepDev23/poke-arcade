import './globals.css'
import styles from './layout.module.css'
import React from 'react'
import Providers from './utils/providers'
import Link from 'next/link'

export const metadata = {
  title: 'PokeArcade',
  description: 'Pokemon web app by JosepDev23',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Link href={'/'}>
          <img className={styles.logo} src="/pokearcade_logo.png" />
        </Link>
        <div className={styles.body}>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
