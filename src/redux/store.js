import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import task from './reducer'

const store = createStore(task, composeWithDevTools(
    applyMiddleware(),
));
export default store;
