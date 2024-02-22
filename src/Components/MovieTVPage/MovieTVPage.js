/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { changeMovieGenre, selectMovie } from '../../store/slices/movieSlice/movieSlice';
import FilmCard from '../FilmCard/FilmCard';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { fetchMovie } from '../../store/slices/movieSlice/movieAPI';
import { fetchTv } from '../../store/slices/tvSlice/tvAPI';
import { selectTv } from '../../store/slices/tvSlice/tvSlice';
import './MovieTVPage.css'
import { fetchNowPlaying } from '../../store/slices/nowPlayingSlice/nowPlayingAPI';
import Pagination from '../Pagination/Pagination';
import { fetchMovieGenres } from '../../store/slices/movieGenresSlice/movieGenresAPI';
import { selectMovieGenres } from '../../store/slices/movieGenresSlice/movieGenresSlice';


const MovieTVPage = () => {
    const dispatch = useDispatch()
    const movie = useSelector(selectMovie)
    const tv = useSelector(selectTv)
    const { cat } = useParams()
    const genre = useSelector(selectMovieGenres)
    useEffect(() => {
        if (cat === 'Movie') {
            dispatch(fetchMovieGenres())
            dispatch(fetchMovie({page: movie.page, genre:movie.genre}))
            dispatch(fetchNowPlaying())
        }
        else {
            !tv.page && dispatch(fetchTv(1))
            tv.page < 2 && dispatch(fetchTv(2))
        }
    }, [movie.page, movie.genre]);
    return (
        <div className='MovieTVPage'>
            <div className="sideBar">
                <h2 className='genre'>Min vote avrage</h2>
                <input type='range' min={2} max={10} defaultValue={2} />
                <h2 className='genre'>Choose by genre</h2>
                <p className={!movie.genre.length ? "activeGenreName genreName" : "genreName" } onClick={() =>dispatch(changeMovieGenre())}>All genres</p>
                {
                    cat === "Movie" ? genre.genres?.map(genre => <p className={movie.genre.includes(genre.id) ? "activeGenreName genreName" : "genreName" } onClick={() => dispatch(changeMovieGenre(genre.id))} key={genre.id}>{genre.name}</p>) : ""
                }
            </div>
            <div className="MainContent">
            {movie.results?.length===0 && <h1>Nothing was found</h1> } 
                <Pagination page={movie.page} total_pages={movie.total_pages} />
                <div className="Contetn">
                    {
                        cat === 'Movie' ? movie.results?.map(movie => <FilmCard key={movie.id} {...movie} />) : tv.results?.map(show => <FilmCard key={show.id} {...show} />)
                    }
                </div>
                <Pagination page={movie.page} />
            </div>
        </div>
    );
}

export default MovieTVPage;
