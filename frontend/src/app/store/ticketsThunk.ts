import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddTicketsFormValues } from '../forms/AddTicketsForm';

const baseUrl = `${process.env.REACT_APP_BASE_URL}/tickets`;

export const getTickets = createAsyncThunk('tickets/getTickets', async () => {
    const { data } = await axios.get(`${baseUrl}`);
    return data.data;
});

export const postTickets = createAsyncThunk('tickets/postTickets', async (values: AddTicketsFormValues) => {
    const { data } = await axios.post(`${baseUrl}`, { ticket: values });
    return data.data;
});
