import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux'

function ToDoCreateForm (props) {



    const [newTaskInput, setNewTaskInput] = useState('')
    const [addTaskDisabled, setAddTaskDisabled] = useState(true)

    const addNewTask = (e) => {
      props.addNewTask(newTaskInput)
      setNewTaskInput('')
        e.preventDefault()
        setAddTaskDisabled(true)
    }

    return (
        <div className="app">
            <input  type="text" value={newTaskInput} onChange={e => setNewTaskInput(e.target.value)}/>
            <button type="submit" className="btn btn-secondary btn-sm"
                    style={{margin: "8px"}}
                    onClick={addNewTask}>Submit</button>


        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
    addNewTask: (newTaskInput) => dispatch({type: "ADD_TASK", payload: newTaskInput})
})

export default connect (mapStateToProps, mapDispatchToProps) (ToDoCreateForm);
