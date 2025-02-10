import { createSlice } from "@reduxjs/toolkit";



const initialState =
{
    consultant: null,
    isAuthenticated: null,
    role: null
}

const consultantSlice = createSlice(
    {
        name: "consultant",
        initialState,
        reducers:
        {
            setConsultant: (state, action) => {
                state.consultant = action.payload;
            },
            setIsAuthenticated: (state, action) => {
                state.isAuthenticated = action.payload;
            },
            setRole: (state, action) => {
                state.role = action.payload;
            }
        }
    }
)

export const { setConsultant, setIsAuthenticated, setRole } = consultantSlice.actions;

export default consultantSlice.reducer