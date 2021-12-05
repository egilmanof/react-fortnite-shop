import './BasketList.css';
import BasketItem from "./BasketItem";


function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incrQuantity,
        decrQuantity,
    } = props;

    const totalPrice = order.reduce((sum, elem) => {
        return sum + elem.price * elem.quantity
    }, 0);

    return (
        <div className='arrange'>
            <div className="arrange_menu">
                <div className='arrange_basket'>Оформление</div>
                <div className='arrange-close' onClick={handleBasketShow}>&#10006;</div>
            </div>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incrQuantity={incrQuantity}
                        decrQuantity={decrQuantity}
                        {...item}/>))
            ) : (
                <div className='arrange_empty'>Корзина пуста</div>
            )}
            <div className='arrange_outcome'>
                <div className='arrange_price'>
                    Общая стоимость: {totalPrice} В-Баксов
                </div>
                <button className='arrange_btn'>Оформить</button>
            </div>
        </div>
    )

}


export default BasketList;