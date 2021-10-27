import logo from './logo.svg';
import './App.css';
import './monstyle.css';
import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";




/*Exporter les components créés */
const App = () => (
  <React.Fragment>

    <div className="defaultAppCss">

      <FullName />

      <ProfilePhoto />

      <Address />

    </div>

    
  </React.Fragment>
 );


 export default App;
 
