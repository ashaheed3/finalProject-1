import React from "react";
import React from 'react';
import NavBar from "./navbar.js";
import myKitchen from "./myKitchen.js";


export default class myKitchen extends React.Component {
    render () {
        return (
            <div>
            <NavBar/>
            <myKitchen/>
            </div>
        )
    }
}