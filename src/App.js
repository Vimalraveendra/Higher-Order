import React from "react";
import UserProfile from "./components/user-profile/UserProfile";
import UserList from "./components/user-list/UserList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserList />
      <UserProfile name="boss" email="bossking@gmail.com" />
    </div>
  );
}

export default App;
