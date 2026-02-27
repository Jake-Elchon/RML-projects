import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'
import phone from "./assets/phone.png"
import book from "./assets/book.png"
import playstation from "./assets/playStation.png"
import watch from "./assets/watch.png"
import shoe from "./assets/shoe.png"

function App() {

  const products = [
    {
      text: "iPHONE XE",
      textColor: "#2351ea",
      productBackgroundColor: "#183699",
      product: phone,
      key: 1
    },
    {
      text: "Physics",
      textColor: "#23eaea",
      productBackgroundColor: "#1c99af",
      product: book,
      key: 2
    },
    {
      text: "sony ps5",
      textColor: "#c5e222",
      productBackgroundColor: "#b3da29",
      product: playstation,
      key: 3
    },
    {
      text: "Rolex pro",
      textColor: "#a06f6f",
      productBackgroundColor: "#991818",
      product: watch,
      key: 4
    },
    {
      text: "iPHONE XE",
      textColor: "#be813a",
      productBackgroundColor: "#d1b61e",
      product: shoe,
      key: 5
    },

  ]
  return (
    <>
     <ProductCard array={products}/>
    </>
  )
}

export default App
