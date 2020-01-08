import React from "react";
import UserProfile from "./components/user-profile/UserProfile";
import UserList from "./components/user-list/UserList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserList dataSource={`https://jsonplaceholder.typicode.com/users`} />
      <UserProfile
        name="boss"
        email="bossking@gmail.com"
        dataSource={`https://jsonplaceholder.typicode.com/posts`}
      />
    </div>
  );
}

export default App;
