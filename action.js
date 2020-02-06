export const addTask = task => (
    {
        type: 'ADD_TASK',
        payload: task,
    }
)

export const toggleCheckedStatus = taskIndex => (
    {
        type: 'CHECK_TASK',
        payload: taskIndex
    }
)

export const removeTask = taskIndex => (
    {
        type: 'REMOVE_TASK',
        payload: taskIndex
    }
)