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
    switch (action.type) {
        case 'ADD_TASK':
            const {current, possible} = state;
            possible.push(action.payload);
            const newState = {current, possible };
            console.log(newState);
            return newState;
        default:
            return state;
    }
}

export default combineReducers({
    task: taskReducer
})