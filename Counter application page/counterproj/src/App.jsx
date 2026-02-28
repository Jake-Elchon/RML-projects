import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);


  function HandleIncrement() {
    setCount(count + 1);
  }
  function HandleDecrement() {
    if ( count === 0 ){
      return 
    }
    setCount(count - 1);
  }
  function HandleReset(){
    setCount(0);
  }

  return (
    <>
    <div id={styles.counter__card}>
      <div id={styles.counter__display}>
         <h1>{count}</h1>
      </div>

      <div id={styles.counter__controls}>
        <button onClick={HandleIncrement} className={styles.increment__svgContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 640 640"><path fill="rgb(134, 137, 147)" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>
        </button>
        <button onClick={HandleDecrement} className={styles.decrement__svgContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 640 640"><path fill="rgb(134, 137, 147)" d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
        </button>
        <button onClick={HandleReset} className={styles.restart__svgContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width={45} viewBox="0 0 640 640"><path fill="rgb(134, 137, 147)" d="M320 128C263.2 128 212.1 152.7 176.9 192L224 192C241.7 192 256 206.3 256 224C256 241.7 241.7 256 224 256L96 256C78.3 256 64 241.7 64 224L64 96C64 78.3 78.3 64 96 64C113.7 64 128 78.3 128 96L128 150.7C174.9 97.6 243.5 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C233 576 156.1 532.6 109.9 466.3C99.8 451.8 103.3 431.9 117.8 421.7C132.3 411.5 152.2 415.1 162.4 429.6C197.2 479.4 254.8 511.9 320 511.9C426 511.9 512 425.9 512 319.9C512 213.9 426 128 320 128z"/></svg>
        </button>

      </div>
    </div>
    </>
  )
}

export default App
