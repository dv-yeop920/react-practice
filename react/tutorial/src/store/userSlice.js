import { createSlice } from '@reduxjs/toolkit'


const user = createSlice({
    name:'user',
    initialState: 
    [
    ],
    reducers: {
        addCount(state , action){
            const selectId = state.find(item => {
                return action.payload === item.id;
            });
            selectId.count++;
        },
        subtractCount(state , action) {
            const selectId = state.find(item => {
                return action.payload === item.id;
            });
            selectId.count--;
            selectId.count < 1 && selectId.count++;
        },
        addUserList(state , action) {
            const newList = action.payload;
            const stateIndex = state.findIndex(list => {
                return list.id === newList.id;
            });
            state.find(list => list.id === newList.id) 
            ?  state[stateIndex].count++ 
            : state.push(newList);
        },
        removeUserList(state , action) {
            const selectId = state.findIndex(item => {
                return action.payload === item.id;
            });
            state.splice(selectId , 1);
        }
    }
});

export const { removeUserList , addUserList, addCount , subtractCount} = user.actions;

export default user