import React from 'react';
import { Provider } from 'react-redux'
import { sagaMiddleware } from './middleware'
import store from './store'
import Main from './layouts/main'
import saga from './sagas/'

const App = () =>(
  <Provider store = {store}>
    <Main />
  </Provider>

)

export default App;

sagaMiddleware.run(saga)