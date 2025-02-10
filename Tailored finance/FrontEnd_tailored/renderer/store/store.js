import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../slices/clientSlice"
import consultantReducer from "../slices/consultantSlice"
import appReducer from "../slices/appSlice"
import tempReducer from "../slices/tempSlice.js"
import adminReducer from "../slices/adminSlice"
const store = configureStore(
    {
        reducer:
        {
            clients: clientReducer,
            consultant: consultantReducer,
            app: appReducer,
            temp: tempReducer,
            admin:adminReducer
        }
    }
)

export default store;