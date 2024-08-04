import React from "react";

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
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Owner: {name}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: jaina290@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
