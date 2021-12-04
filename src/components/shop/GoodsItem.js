import './Goodsitem.css'

function GoodsItem(props) {
    const {id, name, description, price, icon} = props;

    return (
        <div className='product'>
            <div className="items" id={id}>
                <img src={icon} alt={name}/>
                <div className="">
                    <span className="items_title">{name}</span>
                    <p>{description}</p>
                </div>
                <div className="">

                    <button className='btn'>Купить</button>
                    <span className=''>{price}</span>
                </div>
            </div>
        </div>
    )

}

export default GoodsItem;