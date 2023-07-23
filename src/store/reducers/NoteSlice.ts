import { PayloadAction, createSlice } from '@reduxjs/toolkit';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ICheckState {
  checkTodo: boolean;
  count: number;
}

interface ITodoAction {
  type: any;
  payload: any;
}

const initialState: ICheckState = {
  checkTodo: false,
  count: 0,
};

export const NoteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    checkNoteToComplete(state) {
      state.checkTodo = !state.checkTodo;
    },
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
  // reducers: {
  //   increment(state, action: PayloadAction<number>) {
  //     state.count += action.payload;
  //   },
  // },
});

export default NoteSlice.reducer;

//   state = initialState,
//   action: ITodoAction
// : ICheckState => {
//   switch (action.type) {
//     case 'CHECK TODO':
//       return { checkTodo: true };
//     default:
//       return state;
//   }
// };
