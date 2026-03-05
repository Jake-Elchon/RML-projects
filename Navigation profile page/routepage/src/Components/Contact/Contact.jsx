import { useNavigate } from 'react-router-dom'

import style from './Contact.module.css'
import profile from "../../assets/profile.jpeg"

function Contact() {
  const navigate = useNavigate()

  return (
    <>
    <div id={style.intro__container3}>
      <div id={style.left__navigation3}>
        <div className={style.profile__imageContainer3}>
          <img src={profile} alt="logo" />
        </div>

        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </div>

      <div id={style.right__navigation3}>
          <div id={style.left__section}>
            <h2>Contact Information</h2>

            <div id={style.phone__number}>
              <p>Fake - 678354672</p>
              <p>Real - 697147677</p>
            </div>

            <h2> Fonka Esemu </h2>

            <div id={style.email__address}>
              <p>[email]</p>
              <p>quantummathematics777@gmail.com</p>
            </div>

            <button id={style.button}>
              Drop me a line! 
            </button>
          </div>

          <div id={style.right__section}>
            <div className={style.coverphoto__imageContainer}>
               <img src={profile} alt="cover photo" />
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Contact
