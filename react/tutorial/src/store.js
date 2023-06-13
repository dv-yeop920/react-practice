import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js';


export const { changeCount } = user.actions;

export default configureStore({
    reducer: { 
        user : user.reducer
    }
}) 