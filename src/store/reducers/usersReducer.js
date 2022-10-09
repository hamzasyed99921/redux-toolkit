import {createSlice} from '@reduxjs/toolkit';
import { getUser,singleUser } from '../actions/usersAction';

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        usersContainer:[],
        loader: false,
        errors: {},
        user: {}
    },
    reducers: {
        filteredUsers: (state, action) => {
            state.users = state.usersContainer.filter((user) =>
				user.name.toLowerCase().includes(action.payload)
			);
        }
    },
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.loader = true;
        },
        [getUser.fulfilled]: (state, action) =>{
            state.loader = false;
            state.users = action.payload;
            state.usersContainer = action.payload;

        },
        [getUser.rejected]: (state, action) => {
            state.loader = false;
            state.errors = action.payload;
        },
        [singleUser.pending]: (state, action) => {
            state.loader = true;
        },
        [singleUser.fulfilled]: (state, action) =>{
            state.loader = false;
            state.user = action.payload;
        },
        [singleUser.rejected]: (state, action) => {
            state.loader = false;
            state.errors = action.payload;
        }
    }
})
export const {filteredUsers} = usersReducer.actions;
export default usersReducer.reducer;