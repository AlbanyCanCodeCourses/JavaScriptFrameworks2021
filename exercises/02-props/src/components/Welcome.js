import styles from './Welcome.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Welcome = props => {
    return (
        <div className={styles['block2']}>
            <div className={styles['inner']}>{"Hello, **" + props.name + "**"}</div>
        </div>
    )
}

Welcome.propTypes = {
    name: PropTypes.string
}

export default Welcome;
