// You will need to import the "TranslatorContext" and "TranslatorProvider" from src/contexts/TranslatorContext.js
import {
  TranslatorContext,
  TranslatorProvider,
} from "../../contexts/TranslatorContext.jsx";
import "./App.css";
import TranslatorProvider from '../../contexts/TranslatorContext';
import NavBar from "../NavBar/NavBar";
import CreateAccount from "../CreateAccount/CreateAccount";
import Footer from "../Footer/Footer";

function App() {

  return (
    <TranslatorProvider>
      <div className="App d-flex flex-column">
        <NavBar />
        <div className="container pt-4 pb-4">
          <CreateAccount />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </TranslatorProvider>
  );
}

export default App;
