import axios from "axios";
import { Ticket } from "../models/Tickets.ts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: Ticket[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/ticket',
})

export const saveTicket = createAsyncThunk(
    'ticket/saveTicket',
    async (ticket: Ticket) => {
        try {
            const response = await api.post('/add', ticket);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const updateTicket = createAsyncThunk(
    'ticket/updateTicket',
    async (ticket: Ticket) => {
        try {
            const response = await api.put(`/update/${ticket.ticketID}`, ticket);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteTicket = createAsyncThunk(
    'ticket/deleteTicket',
    async (id: number) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllTickets = createAsyncThunk(
    'ticket/getAllTickets',
    async () => {
        try {
            const response = await api.get('/view');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveTicket.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updateTicket.fulfilled, (state, action) => {
                const index = state.findIndex((ticket) => ticket.ticketID === action.payload.ticketID);
                state[index] = action.payload;
            })
            .addCase(deleteTicket.fulfilled, (state, action) => {
                return state.filter((ticket) => ticket.ticketID !== action.payload);
            })
            .addCase(getAllTickets.fulfilled, (_state, action) => {
                return action.payload;
            })
    }
});

export default ticketSlice.reducer;