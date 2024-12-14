import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Test from "./test/Testreact";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
