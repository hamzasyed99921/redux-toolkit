import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getUser = createAsyncThunk('users', async() =>{
    // users/pending
	// users/fulfilled
	// users/rejected
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})

export const singleUser = createAsyncThunk('user', async(id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.data;
})