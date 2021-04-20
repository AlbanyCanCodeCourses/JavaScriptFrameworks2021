import React from "react";

// const Welcome = ({ name = "User" }) => {
//   return <h1 className="welcome">Hello, {name}!</h1>;
// };

type WelcomeProps = {name: string};

const Welcome = ({name}: WelcomeProps) => {
  return <h1 className="welcome">Hello, {name}!</h1>;
};

Welcome.defaultProps = {
  name: "User",
} as Partial<WelcomeProps>

export default Welcome;
