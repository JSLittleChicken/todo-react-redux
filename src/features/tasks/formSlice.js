import { createSlice } from '@reduxjs/toolkit';

const initialState = {warn: null}

const fromSlice = createSlice({
    name: 'warning',
    initialState,
    reducers: {

        toggleWarning: (state, action) => {
            const warn =  action.payload;
            state.warn = warn
        }

    }
});

export const { toggleWarning } = fromSlice.actions;
export default fromSlice.reducer;