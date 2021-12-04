import './Header.css';
import logo from '../../icons/logo.png';
function Header() {
    return (
        <div className='header'>
            <a href="#" className='header_logo'><img src={logo} alt="logo"/></a>
            <nav className='header_nav'>
                <ul className='header_nav-list'>
                    <li className='header_nav-item'><a href="" className='header_nav-link'>Ссылка</a></li>
                    <li className='header_nav-item'><a href="" className='header_nav-link'>Ссылка</a></li>
                    <li className='header_nav-item'><a href="" className='header_nav-link'>Ссылка</a></li>
                    <li className='header_nav-item'><a href="" className='header_nav-link'>Ссылка</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
