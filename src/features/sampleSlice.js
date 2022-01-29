import { createSlice } from '@reduxjs/toolkit';

const data = [
  { id: 1, name: 'mel' },
  { id: 2, name: 'jack' },
];

// createSlice and createReducer APIs use Immer inside to
// allow us to write "mutating" update logic that becomes correct immutable updates.
// Immer library detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

export const counterSlice = createSlice({
  name: 'counter',
  initialState: data,
  reducers: {
    deleteItem: (state, action) => {
      const key = action.payload;
      return (state = state.filter((item) => item.id !== parseInt(key)));
    },
    editItem: (state, action) => {
      return (state = state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      }));
    },
    addItem: (state, action) => {
      const newId = state.reduce((acc, item) => {
        return (acc = item.id > acc ? item.id : acc);
      }, 0);
      return (state = [...state, { id: newId + 1, name: action.payload }]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, editItem } = counterSlice.actions;

export default counterSlice.reducer;
