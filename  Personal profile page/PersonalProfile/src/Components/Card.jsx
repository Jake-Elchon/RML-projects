import React from "react";
import CardStyles from "./Card.module.css";
import cover from "../assets/cover.jpg";
import profile from "../assets/profile.jpg";


const Card = () => {
  return (
    <>
      <div className={CardStyles.card__container}>
        <div className={CardStyles.ImageContainer}>
          <img src={cover} alt="Cover image" />
        </div>

        <div className={CardStyles.card__container_UserImage}>
          <div className={CardStyles.ImageContainer}>
            <img src={profile} alt="User image" />
          </div>

          <div className={CardStyles.DotRegion}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={CardStyles.card__container_UserInfo}>
          <h2>Fonka Sean</h2>
          <h3>
            {" "}
            Software Engineer | Reinforcement learning practitioner |
            Mechatronics enthusiast
          </h3>

          <p id={CardStyles.hashtags}> #SoftwareEngineer # PowerBuilder #Explorer #Mechatronics #UB</p>
          <p id={CardStyles.about}>
            I am a software engineer dedicated to solving complex problems through elegant code. 
            As a reinforcement learning practitioner and mechatronics enthusiast, I bridge the gap between intelligent algorithms and physical systems, building autonomous solutions that learn to navigate and master the real world.
             <a href="#">Contact info</a>
          </p>

          <p>
            {" "}
            <strong> 480 </strong> connections{" "}
          </p>
        </div>

        <div className={CardStyles.card__container_UserActions}>
          <button className={CardStyles.card__container_UserActions__btn1}>
            {" "}
            Connect{" "}
          </button>
          <button className={CardStyles.card__container_UserActions__btn2}>
            {" "}
            Message{" "}
          </button>

          <div className={CardStyles.DotRegion}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Card;
