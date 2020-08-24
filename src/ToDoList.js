import React from 'react';
import './App.css';
import ToDoItem from "./ToDoItem";
import {connect} from 'react-redux'

function ToDoList(props) {

    const listOfTodos = props.tasks

    return (

        <div>
            <ul className="list-group todo-list, ">
                {listOfTodos.map(el => <ul clasName='app'key={el.id} >
                    <ToDoItem name={el.name}
                              done={el.done}
                              id={el.id}/>
                </ul>)}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, null)(ToDoList);