import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "abhi.pandya",
        avatar_url: "https://avatars.githubusercontent.com/u/22200616?v=4",
        html_url: "https://github.com/Abhishek3098",
      },
      {
        id: "2",
        login: "abhi.pandya",
        avatar_url: "https://avatars.githubusercontent.com/u/22200616?v=4",
        html_url: "https://github.com/Abhishek3098",
      },
      {
        id: "3",
        login: "abhi.pandya",
        avatar_url: "https://avatars.githubusercontent.com/u/22200616?v=4",
        html_url: "https://github.com/Abhishek3098",
      },
    ],
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
