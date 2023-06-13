import { createSlice } from '@reduxjs/toolkit'


const user = createSlice({
    name:'user',
    initialState: 
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1},
        {id : 2, name : 'hey', count : 5},
        {id : 3, name : 'hello world', count : 3}
    ],
    reducers: {
        changeCount(state , action){
            state[action.payload].count += 1;
        }
    }
});

export const { changeCount } = user.actions;

export default user