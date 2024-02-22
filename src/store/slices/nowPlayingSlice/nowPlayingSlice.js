import { createSlice } from "@reduxjs/toolkit";
import { fetchNowPlaying } from "./nowPlayingAPI";

const nowPlayingSlice = createSlice({
    name: 'nowPlaying',
    initialState: {},
    reducers:{},
    extraReducers:{
        [fetchNowPlaying.fulfilled]: (state, { payload }) =>{
            return{
                ...state, 
                ...payload
            }
        }
    }
})

export const nowPlayingReducer = nowPlayingSlice.reducer
export const SelectNowPlaying = state => state.nowPlaying