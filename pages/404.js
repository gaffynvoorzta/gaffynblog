// pages/404.js
import styles from '../components/layout.module.css'
import Link from 'next/link'

export default function Custom404() {
    return (
        <>
        <h1>404 - Page Not Found. Gutted.</h1>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        </>
    )
  }