import styles from "./App.module.css";
import profile from "./assets/profile.jpeg";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);

  function HandleAgeCheck(e) {
    setAge(e.target.value);
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card__container__coverPage}></div>

      <div id="profileImage" className={styles.imageContainer}>
        <img src={profile} alt="profile image" />
      </div>

      <div className={styles.card__container__userInfo}>
        <h1> Sean Larry </h1>
        <h2> Software Engineer </h2>

        <p className="minor">
          {" "}
          Age check:{" "}
          {age == " " ? (
            " "
          ) : age < 18 ? (
            <strong>Minor</strong>
          ) : (
            <strong>Adult</strong>
          )}
        </p>
      </div>

      <input
        type="number"
        className={styles.card__container__AgeInput}
        onChange={(e) => HandleAgeCheck(e)}
        placeholder="Input your age"
      />
    </div>
  );
}

export default App;
