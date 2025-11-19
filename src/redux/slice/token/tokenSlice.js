import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: ''
};

export const userTokenSlice = createSlice({
  name: 'UserToken',  
  initialState,
  reducers: {
    addUserToken: (state, action) => {
      state.token = action.payload.token;
    }
  },
});

export const { addUserToken } = userTokenSlice.actions;

export default userTokenSlice.reducer;
