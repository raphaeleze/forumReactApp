import './App.css';
import ButtonAppBar, { AppBar } from './components/Appbar';
import Router from './Router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Router></Router>

      <ToastContainer /> {/* For user feedback messages */}
    </div>
  );
}

export default App;

