import { createSlice } from "@reduxjs/toolkit";



const initialState =
{
    affaires : [
        { id: '1', name: 'Affaire 1' },
        { id: '2', name: 'Affaire 2' },
      ]    
    
} 

const tempSlice=createSlice(
    {
        name:"temp",
        initialState,
        reducers:
        {
            addAffaire:(state,action)=>
            {
                state.affaires.push(action.payload);
            }
        }
    }
)

export const {addAffaire}=tempSlice.actions;

export default tempSlice.reducer;