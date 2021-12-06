import './Event.css';
import {API_URL_NEWS, API_KEY} from "../../config";
import {useEffect, useState} from "react";
import Preloader from "../shop/Preloader";
import NewsList from "./NewsList";


function Event() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function getNews() {
        fetch(API_URL_NEWS, {
            headers: {
                Authorization: API_KEY
            }
        })
            .then(response => response.json())
            .then((data) => {
                data.news && setNews(data.news);
                setLoading(false);
            })

    }, []);


    return (
        <div className="event">
            <div className="event_container">
                {
                    loading ? <Preloader/> : <NewsList news={news}/>
                }
            </div>
        </div>
    );
}

export default Event;