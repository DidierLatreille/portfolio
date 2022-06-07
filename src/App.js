import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import SobreMi from './components/SobreMi';

function App() {
  
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <SobreMi/>
    </div>
  );
}

export default App;
