import React from "react";
import TheNavBar from "./reusables/navbar/index";


//This file will hold all needed class from the main index.js from each component page or reuseable that then is exported to the App.js
// this should render it all functionality of the app buttons, headers, modals, pages index.js aka index.html 


export default class TheApp extends React.Component {
    render () {
        return (
            <TheNavBar/>
            <Header/>
            
            <Footer/>
        );
    }
}

