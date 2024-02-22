import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieGenres } from "./movieGenresAPI";

const movieGenresSlice = createSlice({
    name: "movieGenres",
    initialState: {},
    reducers:{},
    extraReducers:{
        [fetchMovieGenres.fulfilled]: (state, { payload }) =>{
            return {
                ...state,
                ...payload
            }
        }
    }
})

export const movieGenresReducer = movieGenresSlice.reducer
export const selectMovieGenres = state => state.movieGenres
