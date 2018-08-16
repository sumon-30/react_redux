import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store, history } from './js/store/index';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// ReactDOM.render((
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <App />
//         </ConnectedRouter>
//     </Provider>
//     ),
//     document.getElementById('root')
// );
registerServiceWorker();
