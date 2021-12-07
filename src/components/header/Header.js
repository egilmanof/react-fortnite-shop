import './Header.css';
import logo from '../../icons/logo.png';
import {Link, NavLink} from "react-router-dom";




function Header() {
    return (
        <header className='header'>
            <div className='header_container'>
            <Link to="/" className='header_logo'><img src={logo} alt="logo"/></Link>
            <nav className='header_nav'>
                <ul className='header_nav-list'>
                    <li className='header_nav-item'><NavLink to="/news" className='header_nav-link'>Новости</NavLink></li>
                    <li className='header_nav-item'><NavLink to="/sale" className='header_nav-link'>Магазин</NavLink></li>
                    <li className='header_nav-item'><NavLink to="/feedback" className='header_nav-link'>Обратная связь</NavLink></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;
