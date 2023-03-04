import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name = "YOU"/>
      <Greet name = "ME"/>
    </div>
  );
}

export default App;
