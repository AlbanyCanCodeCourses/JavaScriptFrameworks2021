import React, {FunctionComponent} from 'react';
import styles from './Welcome.module.css';

type WelcomeProps = {
    name: string
}

const Welcome: FunctionComponent<WelcomeProps> = ({ name }) => {
  return (
    <div className={styles["block2"]}>
      <div className={styles["inner"]}>{"Hello, **" + name + "**"}</div>
    </div>
  );
};


export default Welcome;
