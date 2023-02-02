import { createSlice } from "@reduxjs/toolkit";


export const markSlice = createSlice({
    name: "mark",
    initialState: {
      entry: "This is user input",
      ic:"This is user input",
      helping:false,
      old:""
    },
    reducers: {
      change: (state, action) => {
        state.entry = action.payload;
      },
      textim: (state, action) => {
        state.ic = action.payload;
      },
      help: (state,action) => {
        if(!state.helping){state.helping = true; state.old = state.ic; state.ic = action.payload}
        else{
            state.helping = false;
            state.ic = state.old
        }
      },
    },
})

export const { change, textim, help } = markSlice.actions;
export default markSlice.reducer;