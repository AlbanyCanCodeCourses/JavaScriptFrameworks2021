import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Button from "./components/Button";
import ProfileImage from "./components/ProfileImage";
import Temperature from "./components/TemperatureDisplay";

function App(props) {

  // return (
  //   <div>
  //     <ProfileImage src="https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1-696x442.jpg"
  //     alt="Luke Skywalker"
  //     width={250}
  //     height={250}
  //     aria-label="My image"
  //     ></ProfileImage>
  //   </div>
  // )

  return(
    <div>
      <Temperature
        celsius= {30}>
      </Temperature>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld name="Jamal" age={28}/>
        <p> I hope you are having a great day</p>
        <Button name="Jamal"></Button>
        {/* <HelloWorld name="John"/>
        <HelloWorld name="Sean"/>
        <HelloWorld name="Godson"/>
        <HelloWorld name="Hillary"/> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
