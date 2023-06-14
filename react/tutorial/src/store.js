import { configureStore } from '@reduxjs/toolkit'
import local from './store/local.js';
import user from './store/userSlice.js';



export default configureStore({
    reducer: { 
        user : user.reducer,
        local : local.reducer
    }
}) 