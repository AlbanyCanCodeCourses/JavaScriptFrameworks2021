import React from "react";

function HelloWorld(props) {
    console.log(props)
    return(
    <>

    <h1>Hello {props.name} you are {props.age}</h1>
    {props.children}
    </>
    );

}

export default HelloWorld;