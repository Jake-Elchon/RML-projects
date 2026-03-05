import { useEffect, useState } from "react";
import style from "./App.module.css";


function App() {
  const [users, setUsers] = useState([{}]);
  const [searchItem, setSearchItem] = useState("");
  const [InitialUsers, setInitialUsers] = useState([{}]);

  async function searchUser(searchItem) {
    if ( searchItem.trim() === "" ) {
      setUsers(InitialUsers);
      return;
    }
    try {
      const searchedUsers = await fetch(`https://dummyjson.com/users/search?q=${searchItem}`)
      .then(res => res.json())
      .then(data => data.users);

      setUsers(searchedUsers);
    }
    catch(error) {
      console.log(`There's an error : ${error.message}`);
    }
  }

  function DetermineSearchItem(searchItem){
    if ( searchItem.trim() === "" ) {
      setUsers(InitialUsers);
      return;
    }
    setSearchItem(searchItem);
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const initialUsers = await fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => data.users);

        setInitialUsers(initialUsers);
        setUsers(initialUsers);
      }
      catch(error){
        console.log(`There's an error : ${error.message}`);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <div id={style.container}>
        <div id={style.inputfield}>
          <input type="text" id={style.input} placeholder="Search user" onChange={(e) => DetermineSearchItem(e.target.value)}/>
          <button id={style.btn__svgContainer} onClick={() => searchUser(searchItem)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(247, 247, 247)" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
          </button>
        </div>

        <div id={style.users}>
          {users.map((user) => (

          <div className={style.user__container}>
            <div className={style.user__imageContainer}>
              <img src={user.image} alt="user image " />
            </div>

            <h1 className={style.user__name}>{user.firstName} {user.lastName}</h1>
            <h3 className={style.user__email}>{user.email}</h3>
          </div>

          ))}
        </div>
      </div>
    </>
  );
}

export default App;
