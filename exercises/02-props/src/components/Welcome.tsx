import { ReactNode } from 'react';

type WelcomeProps = {
  name: string,
}

const Welcome = ({ name }: WelcomeProps) => {
  return (
    <h1>
      Hello, {name || "user"}
    </h1>
  )
}

export default Welcome;