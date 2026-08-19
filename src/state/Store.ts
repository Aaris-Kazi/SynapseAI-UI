import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./counter/CounterSlice";
import UsernameSlice from "./counter/UsernameSlice";


export const store = configureStore({
    reducer : {
        counter : CounterSlice,
        username : UsernameSlice
    }
}); 


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
