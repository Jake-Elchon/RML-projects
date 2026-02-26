import React from "react";
import HeaderStyles from "./Header.module.css";
import image from "../../assets/intro-bg.jpg";
import profile from "../../assets/profile.jpeg";

const Header = () => {
  return (
    <header>
      <div id={HeaderStyles.front__section}>
        <nav>
          <div id={HeaderStyles.left__navigation}>
            <div className={HeaderStyles.imageContainer}>
              <img src={profile} alt="profile image" />
            </div>

            <ul id={HeaderStyles.left__navigation__links}>
              <li>
                <a href="#">Intro</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <ul id={HeaderStyles.right__navigation}>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg"  width={50} viewBox="0 0 640 640"><path fill="rgb(62, 59, 255)" d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 640 640"><path fill="rgb(59, 209, 255)" d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>
              </a>
            </li>
          </ul>
        </nav>

        <div id={HeaderStyles.header__info}>
            <h1>Providing creative solutions to turn ideas into a physical reality</h1>
            <div id={HeaderStyles.header__info_ActionButtons}>
                <button id={HeaderStyles.more__about_me}>More about me </button>
                <button id={HeaderStyles.play}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 640 640"><path fill="rgb(255, 255, 255)" d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>
                </button>
            </div>
        </div>
      </div>

      <div id={HeaderStyles.back__section}>
        <div id={HeaderStyles.back__section__left}></div>
        <div class={HeaderStyles.back__section__right}>
        </div>
        <div className={HeaderStyles.back__section__right_imageContainer}>
            <img src={image} alt="header image" />
          </div>
      </div>
    </header>
  );
};

export default Header;
