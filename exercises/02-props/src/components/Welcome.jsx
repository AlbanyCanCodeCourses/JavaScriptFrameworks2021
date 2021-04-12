<<<<<<< HEAD
function Welcome({name}){
    return <div>Hello {name ||"User"}</div>
}

=======
// const Welcome = (props) => {
//     return <h1> Hello, {props.name} </h1>;
// }


class Welcome extends React.Component {    
    render() {
        return (
            <div>
                <h1> Hello, {props.name} </h1>
                <p>...such is life, {props.name} </p>
                <h2>Goodbye, {props.name} </h2>
            </div>
        )
    }
}

Welcome.defaultProps = {"name":"PLACEHOLDER"}

>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
export default Welcome;