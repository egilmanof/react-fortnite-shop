import './BaketItem.css';

function BasketItem(props) {
    const {id, name, price, quantity, decrQuantity = Function.prototype, incrQuantity = Function.prototype, removeFromBasket = Function.prototype} = props;
    return (
        <div className='order'>
            <div className='order_name'>{name}</div>
            <div className='order_quantity'>{quantity} шт.</div>
            <div className='order_price'>{price * quantity}</div>
            <button className='order_btn' onClick={() => decrQuantity(id)}>&#10134;</button>
            <button className='order_btn' onClick={() => incrQuantity(id)}>&#10133;</button>
            <button className='order_btn' onClick={() => removeFromBasket(id)}>&#10008;</button>
        </div>
    )


}

export default BasketItem;