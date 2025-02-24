// import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import NavBar from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RootLayout from './component/RootLayout'
import Dashboard from './component/Dashboard';
import Cart from './component/Cart'

function App() {
  return (
    <div className="App">
      <Router>
      {/* <NavBar/> */}
      <RootLayout/>
         <Routes>
            <Route index element={<Dashboard/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
         </Routes>
      </Router>
     
   
    </div>
  );
}

export default App;
