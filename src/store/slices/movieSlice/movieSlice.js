import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "./movieAPI";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        page: 1,
        genre: [],
    },
    reducers:{
        changeMoviePage(state, {payload}){
                state.page = payload
        },
        changeMovieGenre(state, {payload}){
            if(!payload){
                state.genre =[]
            }
            else if(!state.genre.includes(payload)){
                state.genre.unshift(payload)
            }
            else{
                state.genre = state.genre.filter(genre => genre !== payload)
            }
    },
    },
    extraReducers:{
        [fetchMovie.fulfilled]: (state, {payload})=>{
            return {
                ...state,
                ...payload
            }
        }

    }
})

export const movieReducer = movieSlice.reducer
export const selectMovie = state => state.movie
export const {changeMoviePage,changeMovieGenre} = movieSlice.actions