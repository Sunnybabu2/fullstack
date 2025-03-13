import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard'
import RootLayout from './components/RootLayout'
import Cart from './components/Cart'
import {Provider} from 'react-redux'
import store from './store/store'
import NavBar from './components/NavBar'
import mirageServer from './mirageserver/pointserver';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


if(process.env.NODE_ENV === "development")
{
  mirageServer({environment:"development"});
}
// import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'



// function App() {
//   const router=createBrowserRouter(createRoutesFromElements(
//     <Route path="/" element={<RootLayout/>}>
//        <Route index element={<Dashboard/>}></Route>
//        <Route path="/cart" element={<Cart/>}></Route>
//     </Route>
//   ))
//   return (
//     <div className="App">
//       <RouterProvider router={router}/>
//       {/* <Product/> */}
//       {/* <Router>
//         <RootLayout/>
//           <Routes>
//               <Route index element={<Dashboard/>}></Route>
//               <Route path="/cart" element={<Cart/>}></Route>
//           </Routes>
//       </Router> */}
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
     <Provider store={store}>
     <Router>
      <NavBar/>
      {/* <RootLayout/> */}
         <Routes>
            <Route index element={<Dashboard/>}></Route>
            {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}

            <Route path='/cart' element={<Cart/>}></Route>
         </Routes>
      </Router>
     </Provider>
     
     
    </div>
  );
}

export default App;
