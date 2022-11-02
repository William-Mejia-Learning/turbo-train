import './App.css';
import Footer from './components/Footer'
import Landing from './components/Landing'
import "./bootstrap.css"
import "./style.css"

function App() {
  return (
    <div>
      <div id="page-container">
        <Landing></Landing>
      </div>
      <Footer id="footer"></Footer>
    </div>
  );
}

export default App;
