import React from 'react'
import Button from './button.js'

import "./style.css";


const  App = () =>{
    return (
         <div>
         <h1 style={{textAlign: 'center'}}> Hello World!! </h1>
        <Button title='App Store'/>
        <Button title='Play  Store'/>
         </div>
         );
 };
 

 export default App;