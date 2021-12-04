import './Goodsitem.css'

function GoodsItem(props) {
    const {id, name, description, price, icon} = props;

    return (
        <div className='product'>
            <div className="product_items" id={id}>
                <div className='product_info'>
                    <img src={icon} alt={name}/>

                    <span className="product_title">{name}</span>
                    <p className='product_description'>{description}</p>
                </div>
                <span className='product_price'>{price}</span>
                <span className='product_rate'>В-Баксов</span>
                <button className='product_btn'>В корзину</button>
            </div>
        </div>
    )

}

export default GoodsItem;