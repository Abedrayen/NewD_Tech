const { createSlice } = require("@reduxjs/toolkit")



const initialState={
    allConsultants:[]
}


const adminSlice=createSlice({
    name:"admin",
    initialState,
    reducers:{
        setAllConsultants:(state,action)=>
        {
            state.allConsultants=action.payload;
        }
    }
})

export const {setAllConsultants} =adminSlice.actions

export default adminSlice.reducer