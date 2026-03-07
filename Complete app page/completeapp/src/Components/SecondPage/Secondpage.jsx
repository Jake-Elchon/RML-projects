import { useNavigate } from "react-router-dom"
import { useState } from "react"

import SecondStyles from "./Secondpage.module.css"
import FirstPerson from "../../assets/FirstPerson.jpg"
import SecondPerson from "../../assets/SecondPerson.jpg"
import ThirdPerson from "../../assets/ThirdPerson.jpg"


const Secondpage = () => {
  const [firstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [email, setEmailName] = useState("");
  const navigate = useNavigate()

  function ChangeFirstName(e) {
    setFirstName(e);
  }
  function ChangeSecondName(e) {
    setSecondName(e);
  }
  function ChangeEmail(e) {
    setEmailName(e);
  }

 
  return (
       <div id={SecondStyles.pageContainer2}>
          <div id={SecondStyles.left__section2}>
            <div id={SecondStyles.progress__section2}>
              <div className={SecondStyles.progress__information}>
                <div className={SecondStyles.progress__information__imageContainer}>
                  <img src={FirstPerson} alt="user info" />
    
                  <div className={SecondStyles.progress__information__imageContainer__number}>
                    <h2>1</h2>
                  </div>
                </div>
    
                <div className={SecondStyles.progress__information__detial}>
                  <h3>Job Board</h3>
                  <p>Jobs available</p>
                </div>
    
              </div>
              <div className={SecondStyles.progress__information}>
                <div className={SecondStyles.progress__information__imageContainer}>
                  <img src={SecondPerson} alt="user info" />
    
                  <div className={SecondStyles.progress__information__imageContainer__number}>
                    <h2>2</h2>
                  </div>
                </div>
    
                <div className={SecondStyles.progress__information__detial}>
                  <h3>Send detials</h3>
                  <p>Personal Details</p>
                  <div className={SecondStyles.progress__information__highlighter}>
                </div>
                </div>
    
              </div>
              <div className={SecondStyles.progress__information}>
                <div className={SecondStyles.progress__information__imageContainer}>
                  <img src={ThirdPerson} alt="user info" />
    
                  <div className={SecondStyles.progress__information__imageContainer__number}>
                    <h2>3</h2>
                  </div>
                </div>
    
                <div className={SecondStyles.progress__information__detial}>
                  <h3>Thank you</h3>
                  <p>The End</p>
                </div>
    
                <div className={SecondStyles.progress__information__highlighter}>
                </div>

              </div>
            </div>
    
              <div id={SecondStyles.progress__indication2}>
                <h3>2 of 3 Completed </h3>
                <div id={SecondStyles.progress__bar2}>
                  <div id={SecondStyles.progress2}></div>
                </div>
              </div>
          </div>
    
       <div id={SecondStyles.right__section2}>
        <h2>Step 2</h2>
    
        <div id={SecondStyles.header__info2}>
          <h1>Please Give Information.</h1>
          <p> This is to alert you if you have been hired or not.</p>
        </div>
    
        <div id={SecondStyles.choice__container2}>
          <div>
            <input type="text" placeholder="First name" value={firstName} onChange={(e) => ChangeFirstName(e.target.value)}/>
          </div>
          <div>
            <input type="text" placeholder="Second name" value={SecondName} onChange={(e) => ChangeSecondName(e.target.value)}/>
          </div>
          <div>
            <input type="email" placeholder="Email" value={email} onChange={(e) => ChangeEmail(e.target.value)}/>
          </div>
        </div>
    
        
        <button id={SecondStyles.back__button} onClick={() => navigate("/")}>
          Back
        </button>
        <button id={SecondStyles.next__button2} onClick={() => navigate("/Thirdpage")}>
          Next
        </button>
        </div>   
        </div>
  )
}

export default Secondpage