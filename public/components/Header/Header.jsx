import React from 'react'

import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>MicroLens</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}><a className={styles.link} href='#'>Sign In</a></li>
          <li className={styles.listItem}><a className={styles.link} href='#'>Profile</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
