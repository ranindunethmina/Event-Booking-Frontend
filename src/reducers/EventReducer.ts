import axios from "axios"
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Event} from "../models/Event.ts";

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
            const response = await api.put(`/update/${event.EventId}`, event);
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
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveEvent.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updateEvent.fulfilled, (state, action) => {
                return state.map((event)=>
                    event.EventId === action.payload.id ? action.payload : event
                );
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                return state.filter((event) => event.EventId !== action.payload.id);
            })

            .addCase(getAllEvents.fulfilled, (_state, action) => {
                return action.payload;
            });
    }
});

export default eventSlice.reducer;
