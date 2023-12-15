
import './App.scss';
import AppRoutes from './routes';
import { Link } from 'react-router-dom';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
