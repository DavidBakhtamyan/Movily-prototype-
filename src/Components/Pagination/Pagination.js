/* eslint-disable no-mixed-operators */
import "./Pagination.css"
import { useDispatch } from "react-redux";
import { changeMoviePage } from "../../store/slices/movieSlice/movieSlice";


const Pagination = ({total_pages,page}) => {
    const dispatch = useDispatch()
  const HandlePageChange = (newPage)=> {
    if(newPage > 0 && newPage <= 500 && newPage !== page ){
        dispatch(changeMoviePage(newPage))
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    }
    return (
        <div className="PageBtns">
            <button className={page === 1 ? "InactiveBtn btn" : 'btn'} onClick={() => HandlePageChange(1)}>{'<<'}</button>
            <button className={page === 1 ? "InactiveBtn btn" : 'btn'} onClick={() => HandlePageChange(page - 1)}>{'<'}</button>

            <button className={page === 1 ? "ActiveBtn btn" : 'btn'} onClick={() => HandlePageChange(page - 2 < 1 ? 1 : page >= 498 ? 496 : page - 2)}>{page - 2 < 1 ? 1 : page >= 498 ? 496 : page - 2}</button>
            <button className={page === 2 ? "ActiveBtn btn" : 'btn'} onClick={() => HandlePageChange(page - 1 < 2 ? 2 : page >= 498 ? 497 : page - 1)}>{page - 1 < 2 ? 2 : page >= 498 ? 497 : page - 1}</button>
            <button className={page - 2 <= 0 || page + 2 > 500 ? "btn" : "ActiveBtn btn"} onClick={() => page <= 2 && HandlePageChange(3) || page >= 498 && HandlePageChange(478)}>{page <= 3 ? 3 : page >= 498 ? 498 : page}</button>
            <button className={page === 499 ? "ActiveBtn btn" : 'btn'} onClick={() => HandlePageChange(page + 1 > 499 ? 499 : page < 3 ? 4: page+1)}>{page + 1 > 499 ? 499 : page < 3 ? 4: page+1 }</button>
            <button className={page === 500 ? "ActiveBtn btn" : 'btn'} onClick={() => HandlePageChange(page + 2 > 500 ? 500 : page < 3 ? 5: page+2)}>{page + 2 > 500 ? 500 : page < 3 ? 5: page+2}</button>

            <button className={page === 500 ? "InactiveBtn btn" : 'btn'} onClick={() => HandlePageChange(page + 1)}>{'>'}</button>
            <button className={page === 500 ? "InactiveBtn btn" : 'btn'} onClick={() => HandlePageChange(total_pages>500 ? 500 : total_pages)}>{'>>'}</button>
        </div>
    );
}

export default Pagination;
