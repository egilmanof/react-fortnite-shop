import './Goodsitem.css'

function GoodsItem(props) {
    const {id, name, description, price, icon, addToBasket = Function.prototype} = props;

    return (
        <div className='product'>
            <div className="product_items">
                <div className='product_info'>
                    <img src={icon} alt={name}/>

                    <span className="product_title">{name}</span>
                    <p className='product_description'>{description}</p>
                </div>
                <span className='product_price'>{price}</span>
                <span className='product_rate'>В-Баксов</span>
                <button
                    className='product_btn'
                    onClick={() =>
                        addToBasket({id, name, price,})}
                    >
                    В корзину
                </button>
            </div>
        </div>
    )

}

export default GoodsItem;