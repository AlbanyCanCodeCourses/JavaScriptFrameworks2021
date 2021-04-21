
function Welcome({name}){
    return <div>Hello {name ||"User"}</div>
}



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

export default Welcome;