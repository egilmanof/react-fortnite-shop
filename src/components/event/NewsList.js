import NewsItem from "./NewsItem";



function NewsList(props) {
    const { news = []} = props;

    if (!news.length) {
        return(
            <h3>Нет новостей</h3>
        )
    }

    return (
        <div className='goods'>
            {news.slice(0, 12).map((item) => (
                <NewsItem key={item.id} {...item} />
            ))}
        </div>
    );

}

export default NewsList;