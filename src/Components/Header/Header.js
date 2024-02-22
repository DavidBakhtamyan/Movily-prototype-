import { useNavigate } from 'react-router';
import './Header.css'

const Header = () =>{
    const navigate = useNavigate()
    return (
        <div className="Header">
            <div className="HeaderContent">
                <h1 onClick={() => navigate('/')}>Movily</h1>
                <div className="HeaderList">
                    <ul>
                    <li className='Active'>Home</li>
                        <li>About</li>
                        <li>News</li>
                        <li>Discover</li>
                        <li>Comunity</li>
                    </ul>
                    <button>Login or Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header;