/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../store/slices/movieSlice/movieAPI';
import { selectMovie } from '../../store/slices/movieSlice/movieSlice';
import './MainContainer.css'
import FilmCard from '../FilmCard/FilmCard';
import { fetchTv } from '../../store/slices/tvSlice/tvAPI';
import { selectTv } from '../../store/slices/tvSlice/tvSlice';
import { useNavigate } from 'react-router';
import MovieBanner from '../MovieBanner/MovieBanner';
const MainContainer = () => {
    const dispatch = useDispatch()
    const movie = useSelector(selectMovie)
    const tv = useSelector(selectTv)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchMovie({page: 1, genre:''}))
        tv.results?.length || dispatch(fetchTv())
    }, []);
    return (
        <div className='MainContainer'>
        <MovieBanner/>
            <div className="FilmSectionContainer">
                <p>Movies</p>
                <div className="FilmSection">
                    {
                       movie.results?.slice(0, 14).map(movie => <FilmCard key={movie.id} {...movie} />)
                    }
                </div>
                <button className='DiscoverBtn' onClick={() => navigate('Movie')}>Discover More Movies</button>
            </div>
            <div className="FilmSectionContainer">
                <p>TV Shows</p>
                <div className="FilmSection">
                    {
                       tv.results?.slice(0, 14).map(movie => <FilmCard key={movie.id} {...movie} />)
                    }
                </div>
                <button className='DiscoverBtn' onClick={() => navigate('Tv')}>Discover More TV Shows</button>
            </div>
        </div>
    );
}

export default MainContainer;
