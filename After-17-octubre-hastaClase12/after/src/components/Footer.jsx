import React from 'react'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <span>Footer</span>
        <a href="https://github.com/spancavil/comision60050" rel='noopener noreferrer' target='_blank'>Github</a>
        <p>Comisión 60050</p>
    </footer>
  )
}

export default Footer