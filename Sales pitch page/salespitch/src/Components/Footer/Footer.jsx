import React from 'react'
import FooterStyles from "./Footer.module.css"

const Footer = () => {
  return (

     <footer>
            <div id={FooterStyles.main__emphasis}>
                <div id={FooterStyles.left__emphasis}>
                    <h1>COLAB</h1>
                    <p>Have an idea or an epic project in mind? Let's discuss. Let's work together and make something great. Drop a line at <strong>quantummathematics777@gmail.com</strong></p>
                </div>
                <div id={FooterStyles.right__emphasis}>
                    <p>
                    I treasure solo focus—deep work where ideas sharpen. But collaboration multiplies impact. Different perspectives catch blind spots, challenge assumptions, build what one mind cannot. Both matter equally.
                    </p>
                </div>
            </div>
    
            <div id={FooterStyles.grid__points}>
                <div className={FooterStyles.points}>
                    <button>Let's talk</button>
                </div>
            </div>
        </footer>
  )
}

export default Footer