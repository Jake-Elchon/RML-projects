import { useNavigate } from "react-router-dom"
import { useState } from "react"


import FirstStyles from "./Firstpage.module.css"
import FirstPerson from "../../assets/FirstPerson.jpg"
import SecondPerson from "../../assets/SecondPerson.jpg"
import ThirdPerson from "../../assets/ThirdPerson.jpg"

const PageData = [
  {
    photo: FirstPerson,
    role: "AI Engineer",
    description: "Build scalable AI models that solve real world problems",
    checked: false,
    key: 1
  },
  {
    photo: SecondPerson,
    role: "Software Engineer",
    description: "Build real world software solutions that solve problems",
    checked: false,
    key: 2
  },
  {
    photo: ThirdPerson,
    role: "Pianist",
    description: "Become the next MJ and make people faint with music",
    checked: false,
    key: 3
  }
]


const Firstpage = () => {
  const [Data, setData] = useState(PageData)
  const navigate = useNavigate()
  
  function SetChoice(key) {

    setData(Data.map(item => 
      item.key === key ?
      {
        ...item, checked : !item.checked
      } : 
      {
        ...item, checked: false
      }
    ));
  }

  function HandleSubmission() {
    navigate("/Secondpage");
  }


  return (
    <div id={FirstStyles.pageContainer}>
      <div id={FirstStyles.left__section}>
        <div id={FirstStyles.progress__section}>
          <div className={FirstStyles.progress__information}>
            <div className={FirstStyles.progress__information__imageContainer}>
              <img src={FirstPerson} alt="user info" />

              <div className={FirstStyles.progress__information__imageContainer__number}>
                <h2>1</h2>
              </div>
            </div>

            <div className={FirstStyles.progress__information__detial}>
              <h3>Job Board</h3>
              <p>Jobs available</p>
            <div className={FirstStyles.progress__information__highlighter}>
            </div>
            </div>

          </div>
          <div className={FirstStyles.progress__information}>
            <div className={FirstStyles.progress__information__imageContainer}>
              <img src={SecondPerson} alt="user info" />

              <div className={FirstStyles.progress__information__imageContainer__number}>
                <h2>2</h2>
              </div>
            </div>

            <div className={FirstStyles.progress__information__detial}>
              <h3>Send details</h3>
              <p>personal details</p>
            </div>

            <div className={FirstStyles.progress__information__highlighter}>
            </div>
          </div>
          <div className={FirstStyles.progress__information}>
            <div className={FirstStyles.progress__information__imageContainer}>
              <img src={ThirdPerson} alt="user info" />

              <div className={FirstStyles.progress__information__imageContainer__number}>
                <h2>3</h2>
              </div>
            </div>

            <div className={FirstStyles.progress__information__detial}>
              <h3>Thank you</h3>
              <p>The end</p>
            </div>

            <div className={FirstStyles.progress__information__highlighter}>
            </div>
          </div>
        </div>

          <div id={FirstStyles.progress__indication}>
            <h3>1 of 3 Completed </h3>
            <div id={FirstStyles.progress__bar}>
              <div id={FirstStyles.progress}></div>
            </div>
          </div>
      </div>

   <div id={FirstStyles.right__section}>
    <h2>Step 1</h2>

    <div id={FirstStyles.header__info}>
      <h1>What kind of Job you need?</h1>
      <p> Be specific in the role you desire as we offer quite a lot</p>
    </div>

    <div id={FirstStyles.choice__container}>
      {Data.map((Data) => (
         <div className={FirstStyles.choice} key={Data.key}>
        <div className={FirstStyles.choice__imageContainer}>
          <img src={Data.photo} alt="choice image" />
        </div>

        <h3>{Data.role}</h3>
        <p>{Data.description}</p>
        <input type="checkbox" className={FirstStyles.checkbox__decision} checked={Data.checked} onClick={() => SetChoice(Data.key)}/>
      </div>
      ))}
    </div>

    <button id={FirstStyles.next__button} onClick={() => HandleSubmission()}>
      Next
    </button>
    </div>   
    </div>
  )
}

export default Firstpage