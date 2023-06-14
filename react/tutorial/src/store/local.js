import { createSlice } from "@reduxjs/toolkit";


const local = createSlice({
    name:'local',
    initialState:[],
    reducers: {
        addWachList(state , action) {
            const newList = action.payload;
            const stateIndex = state.find(state => {
                return state.id === newList.id;
            });
            if(stateIndex) {
                return;
            }
            state.push(newList);
        },
        setLocalStorage(state) {
            localStorage.setItem('watchedMenu' ,JSON.stringify(state));
        }
    }
})

export const { addWachList , setLocalStorage } = local.actions;

export default local;