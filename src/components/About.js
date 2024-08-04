import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>Hello from About Us Page</h1>
      <h2>This is Food Delivery App.. Enjoy your food 😊</h2>
      <UserClass name={"Aniket Jain {class}"} location={"Noida"} />
    </div>
  );
};

export default About;
