export const addTask = task => (
    {
        type: 'ADD_TASK',
        payload: task,
    }
)

export const removeTask = taskIndex => (
    {
        type: 'REMOVE_TASK',
        payload: taskIndex
    }
)