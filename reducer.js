import {combineReducers} from 'redux';

const INITIAL_STATE =  {
    current: [],
    possible: [
        'First Store Item',
        'Second Store Item',
        'Third Store Item',
    ]
};

const taskReducer = (state = INITIAL_STATE,  action) => {
    let {current, possible} = state;
    let newState = {};
    switch (action.type) {
        case 'ADD_TASK':
            possible.push(action.payload);
            newState = {current, possible };
            console.log(newState);
            return newState;

        case 'REMOVE_TASK':
            possible.splice(action.payload, 1);
            newState = {current, possible};
            return newState; 

        default:
            return state;
    }
}

export default combineReducers({
    task: taskReducer
})