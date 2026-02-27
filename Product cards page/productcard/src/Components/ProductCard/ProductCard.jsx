import HeaderStyles from "./ProductCard.module.css";
import { useState } from "react";


const ProductCard = ({ array }) => {
  const [index, setindex] = useState(0);
  const [next_index, setNextIndex] = useState(1);

  function HandleLeftNavigation(){
    if ( index === 0 ){
      return;
    }
    if ( index === 4 ){
      setindex(index - 1);
      return;
    }

    setindex(index - 1);
    setNextIndex(next_index - 1);
  }

  function HandleRightNavigation() {
    if ( index === 3 ){
      setindex(index + 1);
      setNextIndex(4);
      return 
    }
    if ( index === 4 ){
      return;
    }

    setindex(index + 1);
    setNextIndex(next_index + 1)
  }


  return (
    <header>
      <nav>
        <div id={HeaderStyles.left__navigation}>
          <div className={HeaderStyles.imageContainer}></div>

          <ul>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Sport</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Release dates</a>
            </li>
          </ul>
        </div>

        <div id={HeaderStyles.right__navigation}>
          <div id={HeaderStyles.searchbar}>
            <input type="text" placeholder="Search" />
            <div
              id={HeaderStyles.search}
              className={HeaderStyles.search__icon__svgContainer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                viewBox="0 0 512 512"
              >
                <path
                  fill="rgb(134, 137, 147)"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
            </div>
          </div>

          <h2>Cart</h2>
        </div>
      </nav>

      <div id={HeaderStyles.display__screen} key={array[index].key}>
        <button class={HeaderStyles.left__navigation__svgContainer} onClick={HandleLeftNavigation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={45}
            viewBox="0 0 640 640"
          >
            <path
              fill="rgb(134, 137, 147)"
              d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z"
            />
          </svg>
        </button>
        <div
          id={HeaderStyles.main__display__product}
          style={{"--card-color": array[index].textColor}}
        >
          <h1> {array[index].text} </h1>
        </div>
        <div
          id={HeaderStyles.back__image}
          className={HeaderStyles.imageContainer}
        >
          <img
            src={array[index].product}
            alt="back product image"
            height={200}
            width={200}
          />
        </div>
        <div
          id={HeaderStyles.front__image}
          className={HeaderStyles.imageContainer}
        >
          <img
            src={array[index].product}
            alt="front product image"
            height={500}
            width={500}
          />
        </div>
        <button class={HeaderStyles.right__navigation__svgContainer} onClick={HandleRightNavigation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={45}
            viewBox="0 0 640 640"
          >
            <path
              fill="rgb(134, 137, 147)"
              d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z"
            />
          </svg>
        </button>

        <div
          id={HeaderStyles.product__background__color}
          style={{"--card-color": array[index].productBackgroundColor}}
        ></div>

        <div
          id={HeaderStyles.next__product}
          style={{"--card-color": array[next_index].productBackgroundColor}}
        >
          <div className={HeaderStyles.product__imageContainer}>
            <img
              src={array[next_index].product}
              width={150}
              height={150}
              alt="next image"
            />
          </div>
          <h3>next product</h3>
        </div>
      </div>
    </header>
  );
};

export default ProductCard;
