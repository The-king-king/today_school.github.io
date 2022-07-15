import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'font-awesome/css/font-awesome.min.css' 
// import 'weui'
import 'react-weui/build/dist/react-weui.css'
import {HashRouter}  from 'react-router-dom'
// import {BrowserRouter}  from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <HashRouter>
        <App />
      </HashRouter>
 </Provider>
)
