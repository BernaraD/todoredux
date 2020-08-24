import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks: [
        {id: uuidv4(), name: "Learn React", done: false },
        {id: uuidv4(), name: "Learn Redux", done: false },
        {id: uuidv4(), name: "Practise more", done: true }
    ]
}

const task = (state = initialState, action) => {
    switch (action.type){

        case 'ADD_TASK':
           return {...state,
               tasks: [...state.tasks,
                   {id: uuidv4(), name:action.payload, done:false}]
           };


        case 'TASK_DELETE':
            const newState = {...state, tasks: state.tasks.filter(el => el.id !== action.payload)}
            return newState;

        case 'TASK_DONE':
            const updatedTodos = {...state, tasks: state.map(el => {
                if (el.id === action.payload) return ({...el, done: true})
                })}
                return updatedTodos

        case 'EDIT_TASK':
            const editedTodos = state.tasks.map(el => {
                if (el.id === action.payload.id) return ({
                    ...el,
                    name: action.payload.editModeInput,

                })
                else return el;
            })
            return {
                ...state,
                tasks: editedTodos
            }

            default:
            return state
    }

}

export default task;