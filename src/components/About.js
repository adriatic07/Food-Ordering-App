import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="m-2 py-2">
      <h1 className="font-bold text-lg">About Us Page</h1>
      <h2 className="font-serif">
        This is Food Delivery App.. Enjoy your food 😊
      </h2>
      <UserClass name={"Aniket Jain {class}"} location={"Noida"} />
    </div>
  );
};

export default About;
