import {combineReducers} from 'redux';

const INITIAL_STATE =  {
    current: [],
    possible: [
        'First Store Item',
        'Second Store Item'
    ]
};

const taskReducer = (state = INITIAL_STATE,  action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    task: taskReducer
})