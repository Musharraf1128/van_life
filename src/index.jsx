import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/src/App'

// to start fake server
// intercepts the request to an actual endpoint 
import './server'

ReactDOM.createRoot(document.getElementById('root')).render( <App /> );

