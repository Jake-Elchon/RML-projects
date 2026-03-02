import styles from './App.module.css'
import google from "./assets/google.jpeg"
import britain from "./assets/britain.jpg"
import { useState } from 'react'



function App() {

  const [info, setInfo] = useState({email: "", password: ""});

  function HandleEmail(e){
    setInfo(prev =>  ({...prev , email: e.target.value}));
  }
  function HandlePassword(e){
    setInfo(prev => ({...prev, password: e.target.value}));
  }

  function HandleSubmission(e){
    e.preventDefault();

    alert(`Your email is ${info.email} with password ${info.password}`);
  }


  return (
    <>
     <div id={styles.signup__container}>
      <div id={styles.left__section}>
        <div id={styles.left__section__topContent}>
          <h1>LARRY.</h1>
          <button id={styles.language}>
            <div className={styles.country__imageContainer}>
              <img src={britain} alt="country logo" />
            </div>
            <h3>EN</h3>
            <div className={styles.dropdown__svgContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 640 640"><path fill="rgb(134, 137, 147)" d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z"/></svg>
            </div>
          </button>
        </div>

        <div id={styles.left__section__mainContent}>
          <h1>Hi there!</h1>
          <p>Welcome here. Community dashboard </p>

          <form action="/" onSubmit={HandleSubmission}>
          <button id={styles.google__login} disabled={true}>
            <div className={styles.googleLogo__imageContainer}>
              <img src={google} alt="google Logo" />
            </div>
            <p>Log in with Google</p>
          </button>

          <div id={styles.or__section}>
            <span></span>
            <p>or</p>
            <span></span>
          </div>

            <input type="text" placeholder='Your email' onChange={HandleEmail}/>
            <input type="password" placeholder='Password' onChange={HandlePassword}/>
            <a href=""> Forgot password? </a>
            <button id='loginButton' type="submit"> Log in</button>
          </form>

          <p>Don't have an account? <a href=''>Sign up</a></p>
        </div>
      </div>

      <div id={styles.right__section}>
          <div id={styles.right__section__topContent}>
            <span></span>
            <p>Sign up</p>
            <p>Join Us</p>
          </div>
        <div id={styles.right__section__mainContent}>
            <div id={styles.Community__highlight}>
              <div className={styles.group__svgContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 640 640"><path fill="rgb(0, 0, 0)" d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z"/></svg>
              </div>
              <p>Largest Space <br /> Community </p>
              <span></span>
            </div>

            <div id={styles.quote}>
              <p>
              Go anywhere you want in a Galaxy full of wonders!</p>
            </div>
        </div>

      </div>
     </div>
    </>
  )
}

export default App
