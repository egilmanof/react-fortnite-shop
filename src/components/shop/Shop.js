import {useState, useEffect} from "react";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import {API_URL, API_KEY} from "../../config";
import './Shop.css';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);


    return (
        <div className='shop'>
            <div className="shop_container">
                {
                    loading ? <Preloader/> : <GoodsList goods={goods}/>
                }
            </div>
        </div>
    );
}

export default Shop;




