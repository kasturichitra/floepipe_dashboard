import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    user: null
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        addUser: (state, action) => {
                state.user = action.payload
            }
        },
        removeUser: (state, action) => {
            const idToRemove = action.payload;
            state.users = state.users.filter(student => student.id !== idToRemove);
        }
    }
);

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
