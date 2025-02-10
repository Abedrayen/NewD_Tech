import { createSlice } from "@reduxjs/toolkit";



const initialState =
{
    clients: [],
    totalClients: 0,
    allClients: []
}

const clientSlice = createSlice(
    {
        name: "client",
        initialState,
        reducers:
        {
            setClient: (state, action) => {
                state.clients = action.payload;
            },
            addClients: (state, action) => {
                state.clients = [...state.clients, ...action.payload];
            },
            setTotalClients: (state, action) => {
                state.totalClients = action.payload;
            },
            resetClient: (state) => {
                state.clients = [state.clients[0]]
                state.totalClients += 1;
            }
        }
    }
)

export const { setClient, addClients, setTotalClients, resetClient } = clientSlice.actions

export default clientSlice.reducer