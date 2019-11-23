import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';
import Shop from "./containers/shop/shop.js";
import AdminPage from  "./containers/admin/admin.js"


function App() {

  useEffect(() => {
    document.title = "Online Shop";
 }, []);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path = "/adminpage" component={AdminPage}/>  
          <Route path = "/" component={Shop}/>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
