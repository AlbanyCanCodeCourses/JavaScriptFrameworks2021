import {FunctionComponent} from 'react';
import "./App.css";
import Welcome from './components/Welcome';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Welcome name="God"/>
    </div>
    )
}

export default App;
