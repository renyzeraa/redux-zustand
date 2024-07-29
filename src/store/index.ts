import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'Todo',
  initialState: ['Fazer café', 'Estudar Redux'],
  reducers: {}
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})