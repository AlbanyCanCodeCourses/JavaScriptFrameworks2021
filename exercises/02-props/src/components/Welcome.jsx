import React from "react";

const Welcome = ({ name = "User" }) => {
  return <h1 class="welcome">Hello, {name}!</h1>;
};

export default Welcome;
