import './Header.css';
import logo from '../../icons/logo.png';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className='header'>
            <div className='header_container'>
            <Link to='/' className='header_logo'><img src={logo} alt="logo"/></Link>
            <nav className='header_nav'>
                <ul className='header_nav-list'>
                    <li className='header_nav-item'><Link to='/' className='header_nav-link'>Новости</Link></li>
                    <li className='header_nav-item'><Link to='/sale' className='header_nav-link'>Магазин</Link></li>
                    <li className='header_nav-item'><Link to='/feedback' className='header_nav-link'>Обратная связь</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;
