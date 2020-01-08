import React from "react";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(resp => resp.json())
      .then(data => this.setState({ users: data.slice(0, 5) }));
  }
  render() {
    return (
      <div className="container user-list">
        <h1>Users</h1>
        {this.state.users.map(user => (
          <div className="post" key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;
