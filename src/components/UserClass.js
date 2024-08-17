import React from "react";
import UserContext from "../Utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/adriatic07");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="my-4">
        <img className="rounded-lg" src={avatar_url} />
        <h3>
          <b>Owner</b>: {name}
        </h3>
        <h3>
          <b>User: </b>
          {
            <UserContext.Consumer>
              {({ loggedInUser }) => loggedInUser}
            </UserContext.Consumer>
          }
        </h3>
        <h3>
          <b>Location: </b>
          {location}
        </h3>
        <h4>
          <b>Contact: </b> jaina290@gmail.com
        </h4>
      </div>
    );
  }
}

export default UserClass;
