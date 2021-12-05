import cart from '../../icons/cart.png';
import './Cart.css';

function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;


    return(
        <div className='cart' onClick={handleBasketShow}>
            <img src={cart} alt="Корзина"/>
            {quantity? <span className='cart_quantity'>{quantity}</span> : null}
        </div>
    )


}

export default Cart;