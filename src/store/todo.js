import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'todo',
    initialState: {
        openTasks: [
            {id: 1, body: 'Task 1', status: 'open'},
            {id: 2, body: 'Task 2', status: 'open'},
            {id: 3, body: 'Task 3', status: 'open'}
        ],
        inProgressTasks: [
            {id: 1, body: 'Task 4', status: 'inProgress'},
            {id: 2, body: 'Task 5', status: 'inProgress'}
        ],
        completedTasks: [
            {id: 1, body: 'Task 6', status: 'completed'},
            {id: 2, body: 'Task 7', status: 'completed'},
            {id: 3, body: 'Task 8', status: 'completed'},
            {id: 4, body: 'Task 9', status: 'completed'},
            {id: 5, body: 'Task 10', status: 'completed'}
        ]
    },
    reducers: {
        addOpenTask: (state, action) => {
            state.openTasks.push({id: state.openTasks.length + 1, body: action.payload, status: 'open'})
        },
        addInProgressTask: (state, action) => {
            state.inProgressTasks.push({
                id: state.inProgressTasks.length + 1,
                body: action.payload,
                status: 'inProgress'
            })
        },
        addCompletedTask: (state, action) => {
            state.completedTasks.push({id: state.completedTasks.length + 1, body: action.payload, status: 'completed'})
        },
        deleteOpenTask: (state, action) => {
            state.openTasks.map((item, index) => {
                if (item.id === action.payload) {
                    state.openTasks.splice(index, 1)
                }
                return item
            })
        },
        deleteInProgressTask: (state, action) => {
            state.inProgressTasks.map((item, index) => {
                if (item.id === action.payload) {
                    state.inProgressTasks.splice(index, 1)
                }
                return item
            })
        },
        deleteCompletedTask: (state, action) => {
            state.completedTasks.map((item, index) => {
                if (item.id === action.payload) {
                    state.completedTasks.splice(index, 1)
                }
                return item
            })
        },
        editOpenTask: (state, action) => {
            state.openTasks.map((item, index) => {
                if (item.id === action.payload.id) {
                    switch (action.payload.status) {
                        case 'open':
                            item.body = action.payload.body
                            break
                        case 'inProgress':
                            state.inProgressTasks.push({
                                id: state.inProgressTasks.length + 1,
                                body: action.payload.body,
                                status: 'inProgress'
                            })
                            state.openTasks.splice(index, 1)
                            break
                        case 'completed':
                            state.completedTasks.push({
                                id: state.completedTasks.length + 1,
                                body: action.payload.body,
                                status: 'completed'
                            })
                            state.openTasks.splice(index, 1)
                            break
                        default:
                            return state
                    }
                }
                return item
            })
        },
        editInProgressTask: (state, action) => {
            state.inProgressTasks.map((item, index) => {
                if (item.id === action.payload.id) {
                    switch (action.payload.status) {
                        case 'open':
                            state.openTasks.push({
                                id: state.openTasks.length + 1,
                                body: action.payload.body,
                                status: 'open'
                            })
                            state.inProgressTasks.splice(index, 1)
                            break
                        case 'inProgress':
                            item.body = action.payload.body
                            break
                        case 'completed':
                            state.completedTasks.push({
                                id: state.completedTasks.length + 1,
                                body: action.payload.body,
                                status: 'completed'
                            })
                            state.inProgressTasks.splice(index, 1)
                            break
                        default:
                            return state
                    }
                }
                return item
            })
        },
        editCompletedTask: (state, action) => {
            state.completedTasks.map((item, index) => {
                if (item.id === action.payload.id) {
                    switch (action.payload.status) {
                        case 'open':
                            state.openTasks.push({
                                id: state.openTasks.length + 1,
                                body: action.payload.body,
                                status: 'open'
                            })
                            state.completedTasks.splice(index, 1)
                            break
                        case 'inProgress':
                            state.inProgressTasks.push({
                                id: state.inProgressTasks.length + 1,
                                body: action.payload.body,
                                status: 'inProgress'
                            })
                            state.completedTasks.splice(index, 1)
                            break
                        case 'completed':
                            item.body = action.payload.body
                            break
                        default:
                            return state
                    }
                }
                return item
            })
        }
    }
})

export const {
    addOpenTask,
    addInProgressTask,
    addCompletedTask,
    deleteOpenTask,
    deleteInProgressTask,
    deleteCompletedTask,
    editOpenTask,
    editInProgressTask,
    editCompletedTask
} = slice.actions

export default slice.reducer