import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "../reducers/EventReducer.ts";
import bookingReducer from "../reducers/BookingReducer.ts";

export const store = configureStore({
    reducer: {
        event: eventReducer,
        booking: bookingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;