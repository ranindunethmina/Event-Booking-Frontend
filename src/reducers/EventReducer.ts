import axios from "axios";
import { Event } from "../models/Event.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: Event[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/event',
})

export const saveEvent = createAsyncThunk(
    'event/saveEvent',
    async (event: Event) => {
        try {
            const response = await api.post('/add', event);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const updateEvent = createAsyncThunk(
    'event/updateEvent',
    async (event: Event) => {
        try {
            const response = await api.put(`/update/${event.eventID}`, event);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteEvent = createAsyncThunk(
    'event/deleteEvent',
    async (id: number) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllEvents = createAsyncThunk(
    'event/getAllEvents',
    async () => {
        try {
            const response = await api.get('/view');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveEvent.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updateEvent.fulfilled, (state, action) => {
                const index = state.findIndex((event) => event.eventID === action.payload.eventID);
                state[index] = action.payload;
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                return state.filter((event) => event.eventID !== action.payload);
            })
            .addCase(getAllEvents.fulfilled, (_state, action) => {
                return action.payload;
            })
    }
});

export default eventSlice.reducer;
