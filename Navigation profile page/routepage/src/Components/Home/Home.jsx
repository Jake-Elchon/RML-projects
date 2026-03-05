import { useNavigate } from 'react-router-dom'

import styles from './Home.module.css'
import profile from "../../assets/profile.jpeg"


function Home() {
  const navigate = useNavigate()

  return (
    <>
    <div id={styles.intro__container}>
      <div id={styles.left__navigation}>
        <div className={styles.profile__imageContainer}>
          <img src={profile} alt="logo" />
        </div>

        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </div>

      <div id={styles.right__navigation__container}>
        <div className={styles.imagecover__imageContainer}>
         
        </div>
      <div id={styles.right__navigation}>
        <h1>Fonka <br /> sean Larry </h1>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home
