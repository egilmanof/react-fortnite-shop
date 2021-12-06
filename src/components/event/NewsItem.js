import './NewsItem.css';

function NewsItem(props) {
    const {title, date, image, body} = props;

    const newDate = date.substr(0, 10);

    return (
        <div className='news'>
            <div className='news_container'>
                <div className='news_item'>
                    <img className='news_img' src={image} alt="news"/>
                    <div className='news_title'>{title}</div>
                    <div className="news_info">
                        <div className='news_body'>{body}</div>
                        <div className='news_time'>Событие завершится: {newDate}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewsItem;
