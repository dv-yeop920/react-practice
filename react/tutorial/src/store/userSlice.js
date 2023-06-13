import { createSlice } from '@reduxjs/toolkit'


const user = createSlice({
    name:'user',
    initialState: 
    [
    ],
    reducers: {
        addCount(state , action){
            const selectId = state.find(item => {
                return action.payload === item.id
            })
            selectId.count++;
        },
        subtractCount(state , action) {
            const selectId = state.find(item => {
                return action.payload === item.id
            })
            selectId.count--;
            selectId.count < 0 && selectId.count++;
        },
        addUserList(state , action) {
            state.push(action.payload);
        }
    }
});

export const { addUserList, addCount , subtractCount} = user.actions;

export default user