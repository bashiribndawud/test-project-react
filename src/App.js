import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/chat";
import { Login } from "./components/Login";

function App() {
  const [currentUser, setcurrentUser] = useState(null);
  const [loggedin, setloggedin] = useState(false);

  const handleChange = (user) => {
    console.log(user);
    storeUser(user);
    setloggedin(true);
  };
  // promptUserName()
  const storeUser = (person) => {
    if (person) {
      setcurrentUser(person);
      let userList = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : [];
      // if it is the first time that this page is loaded
      if (userList.length === 0) {
        // let currentUser = person;
        localStorage.setItem("user", JSON.stringify([currentUser]));
        // setcurrentUser(person);
      } else {
        let currentUser = userList.filter((e) => e === person)[0];
        console.log(currentUser, userList);
        if (!currentUser) {
          userList.push(person);
          console.log(userList);
          localStorage.setItem("user", JSON.stringify(userList));
        }
      }
    }
  };
  return (
    <div className="App">
      {!loggedin ? (
        <Login handleChange={handleChange} />
      ) : (
        <Chat currentUser={currentUser} />
      )}
    </div>
  );
}

export default App;
