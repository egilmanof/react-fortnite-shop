import cart from '../../icons/cart.png';
import './cart.css';

function Cart(props) {
    const {quantity = 0} = props;


    return(
        <div className='cart'>
            <img src={cart} alt="Корзина"/>
            {quantity? <span className='cart_quantity'>{quantity}</span> : null}
        </div>
    )


}

export default Cart;