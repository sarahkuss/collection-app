import { BrowserRouter } from "react-router-dom";
import HomePage from "./scenes/HomePage";
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <HomePage />
    </BrowserRouter>
    </>
  );
}

export default App;
