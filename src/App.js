import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import News from "./pages/News";
import Sale from "./pages/Sale";
import Feedback from "./pages/Feedback";
import Notfound from "./pages/Notfound";
import Main from "./pages/Main";


function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/sale' element={<Sale/>} />
                    <Route path='/feedback' element={<Feedback/>} />
                    <Route path='/notfound' element={<Notfound/>} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
