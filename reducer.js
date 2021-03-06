import {combineReducers} from 'redux';

const INITIAL_STATE =  {
    taskList: [
        {
            task: 'First Task',
            status: true
        },{
            task: 'second task',
            status: false
        },{
            task: 'third task',
            status: false
        },
    ]
};

const taskReducer = (state = INITIAL_STATE,  action) => {
    let {taskList} = state;
    let newState = {};
    switch (action.type) {
        case 'ADD_TASK':
            taskList = [...taskList, {task: action.payload, status: false}];
            newState = {taskList };
            return newState;

        case 'CHECK_TASK':
            taskList.map((item, index) => {
                if(index === action.payload){
                    item.status = !item.status;
                }
            });
            newState = {taskList};
            return JSON.parse(JSON.stringify(newState)); 
            // return newState;

        case 'REMOVE_TASK':
            taskList.splice(action.payload, 1);
            newState = {taskList};
            return JSON.parse(JSON.stringify(newState)); 

        default:
            return state;
    }
}

export default combineReducers({
    task: taskReducer
})