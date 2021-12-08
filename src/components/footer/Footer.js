import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className='footer_copy'>
                    Сopyright &copy;
                </div>
                <a href="https://github.com/egilmanof"  className='footer_link'>GitHub автора</a>
                <div className="footer_data">
                    {(new Date()).getFullYear()}г.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
