import ThirdStyles from "./Thirdpage.module.css"
import FirstPerson from "../../assets/FirstPerson.jpg"
import SecondPerson from "../../assets/SecondPerson.jpg"
import ThirdPerson from "../../assets/ThirdPerson.jpg"

const Thirdpage = () => {
  return (
       <div id={ThirdStyles.pageContainer3}>
              <div id={ThirdStyles.left__section3}>
                <div id={ThirdStyles.progress__section3}>
                  <div className={ThirdStyles.progress__information}>
                    <div className={ThirdStyles.progress__information__imageContainer}>
                      <img src={FirstPerson} alt="user info" />
        
                      <div className={ThirdStyles.progress__information__imageContainer__number}>
                        <h2>1</h2>
                      </div>
                    </div>
        
                    <div className={ThirdStyles.progress__information__detial}>
                      <h3>Job Board</h3>
                      <p>Job available</p>
                    </div>
        
                  </div>
                  <div className={ThirdStyles.progress__information}>
                    <div className={ThirdStyles.progress__information__imageContainer}>
                      <img src={SecondPerson} alt="user info" />
        
                      <div className={ThirdStyles.progress__information__imageContainer__number}>
                        <h2>2</h2>
                      </div>
                    </div>
        
                    <div className={ThirdStyles.progress__information__detial}>
                      <h3>Job Board</h3>
                      <p>Job available</p>
                    </div>
        
                  </div>
                  <div className={ThirdStyles.progress__information}>
                    <div className={ThirdStyles.progress__information__imageContainer}>
                      <img src={ThirdPerson} alt="user info" />
        
                      <div className={ThirdStyles.progress__information__imageContainer__number}>
                        <h2>3</h2>
                      </div>
                    </div>
        
                    <div className={ThirdStyles.progress__information__detial}>
                      <h3>Job Board</h3>
                      <p>Job available</p>

                    <div className={ThirdStyles.progress__information__highlighter}>
                    </div>
                    </div>
    
                  </div>
                </div>
        
                  <div id={ThirdStyles.progress__indication3}>
                    <h3>3 of 3 Completed </h3>
                    <div id={ThirdStyles.progress__bar3}>
                      <div id={ThirdStyles.progress3}></div>
                    </div>
                  </div>
              </div>
        
           <div id={ThirdStyles.right__section3}>
            <h2>Step 3</h2>
        
            <div id={ThirdStyles.header__info3}>
              <h1>End of RML project .</h1>
              <p> Thank you ambassedors for this wonderful mini journey</p>
            </div>
        
         
            </div>   
            </div>
  )
}

export default Thirdpage