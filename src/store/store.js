import { configureStore } from "@reduxjs/toolkit"
import { movieReducer } from "./slices/movieSlice/movieSlice"
import { tvReducer } from "./slices/tvSlice/tvSlice"
import { nowPlayingReducer } from "./slices/nowPlayingSlice/nowPlayingSlice"
import { movieGenresReducer } from "./slices/movieGenresSlice/movieGenresSlice"


const store = configureStore({
    reducer:{
        movie: movieReducer,
        tv: tvReducer,
        nowPlaying: nowPlayingReducer,
        movieGenres: movieGenresReducer
    }
})

export default store