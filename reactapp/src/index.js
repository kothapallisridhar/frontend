import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRoute } from './AppRoute';
import {BrowserRouter} from 'react-router-dom';


export const useContextAPI = React.createContext();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<useContextAPI.Provider value={{id: 1, name: "Sridhar", city: "Bremen",}}>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
   
    //</useContextAPI.Provider>
  //</React.StrictMode>
);

