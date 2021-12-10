
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import News from "./pages/News";
import Sale from "./pages/Sale";
import Feedback from "./pages/Feedback";
import Notfound from "./pages/Notfound";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<News/>} />
                <Route path='react-fortnite-shop' element={<News/>} />
                <Route path='sale' element={<Sale/>} />
                <Route path='feedback' element={<Feedback/>} />
                <Route path='*' element={<Notfound/>} />
            </Routes>
        </Router>
    );
}

export default App;
