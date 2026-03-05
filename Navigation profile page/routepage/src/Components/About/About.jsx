import { useNavigate } from 'react-router-dom'

import style from './About.module.css'
import profile from "../../assets/profile.jpeg"

function About() {
  const navigate = useNavigate()

  

  return (
    <>
    <div id={style.intro__container2}>
      <div id={style.left__navigation2}>
        <div className={style.profile__imageContainer2}>
          <img src={profile} alt="logo" />
        </div>

        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/contact')}>Contact</li>
        </ul>
      </div>

      <div id={style.right__navigation2}>
        <h1>Personal interest</h1>
        <ol>
          <li>Mathematics</li>
          <li>Reinforcement Learning</li>
          <li>Mechatronics</li>
          <li>A little bit of piano LOL</li>
        </ol>
      </div>
    </div>
    </>
  )
}

export default About
