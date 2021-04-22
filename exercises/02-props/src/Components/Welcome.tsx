import React from "react";

interface WelcomeProps {
  name?: string;
}

const defaultProps: WelcomeProps = {
  name: "User",
};

const Welcome: React.FunctionComponent<WelcomeProps> = (props) => (
  <h1>Hello, {props.name}</h1>
);

Welcome.defaultProps = defaultProps;

export default Welcome;
