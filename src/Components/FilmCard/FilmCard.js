import './FilmCard.css'

const FilmCard = (props) => {
    return (
        <div className='FilmCard'>
            <div className="img-rating">
                <img className='film-card-img' src={'https://image.tmdb.org/t/p/original'+props.poster_path} alt="" />
                <span className='film-card-rating'>{props.vote_average}</span>
            </div>
            <span className='film-card-year-category'>{ props.first_air_date? props.first_air_date?.slice(0,4):props.release_date?.slice(0,4)} </span>
            <h3 className='film-card-title'>{ props.name || props.title}</h3>
        </div>
    );
}

export default FilmCard;
