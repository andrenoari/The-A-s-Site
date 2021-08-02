import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="heart" className={styles.logo} /> for me. <br>
       Powered by Chintu.
      </footer>
    </>
  )
}
