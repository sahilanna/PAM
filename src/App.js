import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import Features from './Components/Features/Features';

import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Features /> 
      <LandingPage/>
       
    </div>
  );
}

export default App;
