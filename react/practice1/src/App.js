import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store/store'

import Cards from './component/Cards'

const App = () => {
  return (
    <Provider store={store}>
         <div>
          
      <Cards/>
    </div>
    </Provider>
   
  )
}

export default App
