
import './App.scss';
import AppRoutes from './routes';
import { Link } from 'react-router-dom';
import Cart from './Componetns/Cart';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <ul className='links'>
          <li><Link to="/">home</Link></li>
          <li><Link to="/product-list">product list</Link></li>
          <li><Link to="contact">contact</Link></li>
          <li><Link to={"/cart"}>cart</Link></li>
        </ul>
      </nav>
      <AppRoutes />
    </div>
  );
}

export default App;
