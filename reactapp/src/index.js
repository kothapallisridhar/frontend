import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppCon } from './AppCon';

export const useContextAPI = React.createContext();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <useContextAPI.Provider value={{id: 1, name: "Sridhar", city: "Bremen",}}>
      <AppCon/>
    </useContextAPI.Provider>
  //</React.StrictMode>
);

