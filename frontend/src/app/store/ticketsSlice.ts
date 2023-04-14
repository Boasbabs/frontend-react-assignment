import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTickets, postTickets } from './ticketsThunk';
import { TicketsListTableItemVM } from '../tables/TicketsListTable';
export interface TicketsState {
    tickets: TicketsListTableItemVM[];
    loading: null | 'loading' | 'succeeded' | 'failed';
}

const initialState = {
    tickets: [],
    loading: null,
} as TicketsState;

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTickets.pending, (state: TicketsState) => {
                state.loading = 'loading';
            })
            .addCase(
                getTickets.fulfilled,
                (state: TicketsState, action: PayloadAction<TicketsListTableItemVM[]>) => {
                    state.loading = 'succeeded';
                    state.tickets = action.payload;
                }
            )
            .addCase(getTickets.rejected, (state: TicketsState) => {
                state.loading = 'failed';
            })
            .addCase(postTickets.pending, (state: TicketsState) => {
                state.loading = 'loading';
            })
            .addCase(postTickets.fulfilled, (state: TicketsState) => {
                state.loading = 'succeeded';
            })
            .addCase(postTickets.rejected, (state: TicketsState) => {
                state.loading = 'failed';
            })
            .addDefaultCase((state, action) => {});
    },
});

// Action creators are generated for each case reducer function
export const { fn } = ticketsSlice.actions;

export default ticketsSlice.reducer;
