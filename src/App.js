import React, {useEffect, useState} from 'react';
import ToDoCreateForm from './ToDoCreateForm'
import ToDoList from "./ToDoList";

import './App.css';
import {connect} from 'react-redux'


export default function App() {


    return (
        <div className="app">
            <h3>To do list</h3>
            <span>{(new Date()).toLocaleTimeString()}</span>;
            <span style={{margin: "8px"}}>{(new Date()).toLocaleDateString()}</span>;

            <ToDoCreateForm/>
            <ToDoList/>


        </div>
    );
}


