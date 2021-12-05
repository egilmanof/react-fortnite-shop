import {useState, useEffect} from "react";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "../cart/Cart";
import {API_URL, API_KEY} from "../../config";
import './Shop.css';
import BasketList from "../cart/BasketList";
import Alert from "../cart/Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(elem => elem.id !== itemId)
        setOrder(newOrder);
    }

    const incrQuantity = (itemId) => {
        const newOrder = order.map(elem => {
            if (elem.id === itemId) {
                const newQuantity = elem.quantity + 1;
                return {
                    ...elem,
                    quantity: newQuantity
                };
            } else {
                return elem;
            }
        });
        setOrder(newOrder);
    }

    const decrQuantity = (itemId) => {
        const newOrder = order.map(elem => {
            if (elem.id === itemId) {
                const newQuantity = elem.quantity - 1;
                return {
                    ...elem,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                };
            } else {
                return elem;
            }
        });
        setOrder(newOrder);
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const closeAlert = () => {
        setAlertName('');
    }


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
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            <div className="shop_container">
                {
                    loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>
                }
                {
                    alertName && <Alert name={alertName} closeAlert={closeAlert}/>
                }
                {
                    isBasketShow &&
                    <BasketList
                        order={order}
                        handleBasketShow={handleBasketShow}
                        removeFromBasket={removeFromBasket}
                        incrQuantity={incrQuantity}
                        decrQuantity={decrQuantity}
                    />
                }

            </div>
        </div>
    );
}

export default Shop;




