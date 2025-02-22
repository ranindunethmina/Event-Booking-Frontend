import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "../reducers/EventReducer.ts";
import ticketsReducer from "../reducers/TicketsReducer.ts";
import bookingsReducer from "../reducers/BookingsReducer.ts";

export const store = configureStore({
    reducer: {
        event: eventReducer,
        tickets: ticketsReducer,
        bookings: bookingsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;