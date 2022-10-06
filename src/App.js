import logo from './logo.svg';
import './App.css';
import ButtonAppBar, { AppBar } from './components/Appbar';
import Login from './components/Login';
import Signup from './components/signup';
import Homepage from './components/Homepage';
import NavButtonsLoginSignup from './components/Nav';
import Router from './Router';



function App() {
  return (


    <div className="App">
<ButtonAppBar></ButtonAppBar>

<Router></Router>

</div>
  );
}

export default App;

