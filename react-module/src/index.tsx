import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

    <body>
        <div>
            <h1>My Favorite Food</h1>
            <ul>
                <li>Bacon</li>
                <li>Jamon</li>
                <li>Noodles</li>
            </ul>
        </div>
    </body>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
