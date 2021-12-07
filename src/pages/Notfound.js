import './Notfound.css';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Notfound() {
    return(
        <>
            <Header/>
        <div className='notfound'>
            Ничего не найдено!
        </div>
            <Footer/>
        </>
    )
}


export default Notfound;