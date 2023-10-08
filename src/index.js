import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import './style/button.scss';
import './style/variables.scss';
import App from './components/app/App';
import MarvelService from './services/MarvelService';


// const MService = new MarvelService();
// MService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));
// MService.getCharacter('1011196').then(res => console.log(res));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
