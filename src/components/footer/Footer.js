import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className='footer_copy'>
                    Копирайт &copy;
                </div>
                <div className="footer_data">
                    {(new Date()).getFullYear()}г.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
