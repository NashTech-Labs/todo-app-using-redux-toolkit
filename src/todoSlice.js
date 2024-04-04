import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            const index = state.todos.indexOf(action.payload);
            if (index > -1) { 
                state.todos.splice(index, 1); 
            }
        },
        clearTodos: (state, action) => {
            state.todos = [];
        }
    }
})

export const {addTodo, deleteTodo, clearTodos} = todoSlice.actions;

export default todoSlice.reducer;