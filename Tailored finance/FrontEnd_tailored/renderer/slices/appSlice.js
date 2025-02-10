import { createSlice } from "@reduxjs/toolkit"

const initialState=
{
    dashboardFirstVisit:true
}

const appSlice=createSlice(
    {
        name:"app",
        initialState,
        reducers:
        {
            setDashboardFirstVisit:(state,action)=>
            {
                state.dashboardFirstVisit=action.payload;
            }
        }
    }
)

export const {setDashboardFirstVisit}=appSlice.actions;

export default appSlice.reducer;