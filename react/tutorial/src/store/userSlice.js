import { createSlice } from '@reduxjs/toolkit'


const user = createSlice({
    name:'user',
    initialState: [],
    reducers: {
        addCount(state , action){
            const selectId = state.find(state => {
                return action.payload === state.id;
            });
            selectId.count++;
        },
        subtractCount(state , action) {
            const selectId = state.find(state => {
                return action.payload === state.id;
            });
            selectId.count--;
            selectId.count < 1 && selectId.count++;
        },
        addUserList(state , action) {
            const newList = action.payload;
            const stateIndex = state.findIndex(state => {
                return state.id === newList.id;
            });
            state.find(state => state.id === newList.id) 
            ?  state[stateIndex].count++ 
            : state.push(newList);
        },
        removeUserList(state , action) {
            const selectId = state.findIndex(state => {
                return action.payload === state.id;
            });
            state.splice(selectId , 1);
        }
    }
});

export const { removeUserList , addUserList, addCount , subtractCount} = user.actions;

export default user