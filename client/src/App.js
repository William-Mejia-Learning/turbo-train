import './App.css';
import Footer from './components/Footer'
import Landing from './components/Landing'
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./bootstrap.css"
import "./style.css"
import Feed from './components/Feed';

function App() {
  return (
    <div>
      <div id="section">
      <Routes>
        <Route path='/' element={<Landing /> }></Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
      
      </div>


    </div>
  );
}

export default App;
