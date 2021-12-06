import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


import {Routes, Route} from "react-router-dom";
import Premium from "./pages/Premium";
import Feedback from "./pages/Feedback";
import Sale from "./pages/Sale";
import Notfound from "./pages/Notfound";

function App() {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path='/' element={<Premium />}/>
                    <Route path='/sale' element={<Sale />}/>
                    <Route path='/feedback' element={<Feedback />}/>
                    <Route path='*' element={<Notfound />}/>
                </Routes>
            <Footer/>
        </>
    );
}

export default App;
