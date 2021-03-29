function Displayinfo(props){
    return(
        <div>
            <ul>
                <li>{props.firstName}</li>
                <li>{props.lastName}</li>
                <li>{props.email}</li>
                <li>{props.password}</li>
            </ul>
        </div>
    )

}

export default Displayinfo;