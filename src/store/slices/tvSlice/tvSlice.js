import { createSlice } from "@reduxjs/toolkit";
import { fetchTv } from "./tvAPI";

const tvSlice = createSlice({
    name: 'tv',
    initialState: {
        page: 0,
        results: [],
        total_pages: 0
    },
    reducers:{},
    extraReducers:{
        [fetchTv.fulfilled]: (state, { payload }) => {
            return {
                page: payload.page,
                results: [...state.results, ...payload.results],
                total_pages: payload.total_pages
            }
        }
    }
})
export const tvReducer = tvSlice.reducer
export const selectTv = state => state.tv 