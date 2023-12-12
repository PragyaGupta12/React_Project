import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <h1>Welcome to HealthyEats!</h1>
      <Outlet/>
    </div>
  );
};

export default About;
