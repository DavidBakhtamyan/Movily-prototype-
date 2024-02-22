/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import './MovieBanner.css'
import { SelectNowPlaying } from '../../store/slices/nowPlayingSlice/nowPlayingSlice';
import { useEffect } from 'react';
import { fetchNowPlaying } from '../../store/slices/nowPlayingSlice/nowPlayingAPI';

const MovieBanner = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchNowPlaying())
    },[])
    const { results } = useSelector(SelectNowPlaying)    
    let nowPlaying ={} 
    if(results){
          nowPlaying = results[0]
    } 
    return (
        <div className='MovieBanner'>
            <img className='MovieBannerImg' src={'https://image.tmdb.org/t/p/original' + nowPlaying?.backdrop_path} alt="" />
            <div className='MovieBannerContainer'>
                <div className="MovieBannerContent">
                    <img className='MovieBannerContentImg' src={'https://image.tmdb.org/t/p/original' + nowPlaying?.poster_path} alt="" />
                    <div className="MovieInfo">
                        <div className="MovieInfoContent">
                            <h1>{nowPlaying?.original_title}</h1>
                            <p className='MovieYear'>{nowPlaying?.release_date?.slice(0, 4)}</p>
                            <div className="MovieBannerRating">
                                <p>{nowPlaying?.vote_average}</p>
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-star-fill StarSvg" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>
                            </div>
                            <p className='MovieOverview'>{nowPlaying?.overview}</p>
                        </div>
                        <button className='LearnMoreBtn'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieBanner;
