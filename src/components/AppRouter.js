import News from "../pages/News";
import Sale from "../pages/Sale";
import Feedback from "../pages/Feedback";
import Notfound from "../pages/Notfound";




import {Route, Routes} from "react-router-dom";

function AppRouter() {
    return(
            <Routes>
                <Route path='/' element={<News/>} />
                <Route path='/sale' element={<Sale/>} />
                <Route path='/feedback' element={<Feedback/>} />
                <Route path='*' element={<Notfound/>} />
            </Routes>
        )
}


export default AppRouter;