import React from 'react'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'; 
import { configureStore } from './store'
import { persistStore } from 'redux-persist';
import { persistGate } from 'redux-persist/lib/integration/react'
import App from './App.js'


const store = configureStore();
const persistor = persistStore(store)

ReactDom.render(
<Provider store={store}>
     <persistGate loading={<div>Loading.....</div>} persistor={persistor}> 
          <App /> 
     </persistGate>
    
</Provider>,

document.getElementById('root'),
);