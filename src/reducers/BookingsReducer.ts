import axios from "axios";
import { Booking } from "../models/Booking.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: Booking[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/booking',
})

export const saveBooking = createAsyncThunk(
    'booking/saveBooking',
    async (booking: Booking) => {
        try {
            const response = await api.post('/add', booking);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const updateBooking = createAsyncThunk(
    'booking/updateBooking',
    async (booking: Booking) => {
        try {
            const response = await api.put(`/update/${booking.bookingID}`, booking);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteBooking = createAsyncThunk(
    'booking/deleteBooking',
    async (id: number) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllBookings = createAsyncThunk(
    'booking/getAllBookings',
    async () => {
        try {
            const response = await api.get('/view');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveBooking.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updateBooking.fulfilled, (state, action) => {
                const index = state.findIndex((booking) => booking.bookingID === action.payload.bookingID);
                state[index] = action.payload;
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                return state.filter((booking) => booking.bookingID !== action.payload);
            })
            .addCase(getAllBookings.fulfilled, (_state, action) => {
                return action.payload;
            })
    }
});

export default bookingSlice.reducer;
