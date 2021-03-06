import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

// Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
