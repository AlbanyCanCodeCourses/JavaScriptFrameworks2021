import React from "react";

function Welcome(props) {
    return (
        <h1>
            Hello, {props.name ? props.name : "user"}.
        </h1>
    );
};

export default Welcome