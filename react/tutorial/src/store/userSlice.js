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
            selectId.count < 1 && selectId.count++;
        },
        addUserList(state , action) {
            state.push(action.payload);
        },
        removeUserList(state , action) {
            const selectId = state.findIndex(item => {
                return action.payload === item.id
            })
            state.splice(selectId , 1);
        }
    }
});

export const { removeUserList , addUserList, addCount , subtractCount} = user.actions;

export default user