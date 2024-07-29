import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux'],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.splice(action.payload, 1)
    }
  }
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})

export const { addTodo, removeTodo } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 