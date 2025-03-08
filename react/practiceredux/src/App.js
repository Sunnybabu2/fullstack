// import logo from './logo.svg';
import './App.css';
import Product from './component/Product';
import NavBar from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'

// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RootLayout from './component/RootLayout'
import Dashboard from './component/Dashboard';
import Cart from './component/Cart'

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
       <Route index element={<Dashboard/>}></Route>
       <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <Product/> */}
      {/* <Router>
        <RootLayout/>
          <Routes>
              <Route index element={<Dashboard/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
      </Router> */}
    </div>
  );
}

export default App;
