import { BrowserRouter, Routes, Route} from "react-router-dom"

import Firstpage from './Components/FirstPage/Firstpage'
import Secondpage from './Components/SecondPage/Secondpage'
import ThirdPage from "./Components/Thirdpage/Thirdpage"

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage />}/>
        <Route path="/Secondpage" element={<Secondpage />}/>
        <Route path="/Thirdpage" element={<ThirdPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
