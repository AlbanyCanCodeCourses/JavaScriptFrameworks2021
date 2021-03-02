function Temperature(props) {
    return(
        <h2>The temperature is {props.celsius * 9/5 + 32} Farenheit
        </h2>
    );
};

export default Temperature