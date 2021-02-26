import React from 'react';
import styles from './Welcome.module.css';

const Greeter = props => {
    return (
        <>
            <h1 className={styles['App-logo']}>Hello, {props.name}!</h1>
        </>
    )
}

export default Greeter;
