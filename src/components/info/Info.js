import './Info.css';


function Info() {

    return(
        <div className='info'>
            <div className='info_container'>

                <div className="info_title">
                    <h1 className='info_name'>Совсем скоро</h1>
                    <h2 className='info_description'>Стартует новый сезон с уникальными наградами</h2>
                    <div className='info_slogan'>Не упустите свой шанс стать первым</div>
                </div>

                <div className="info_video">
                    <iframe className='info_iframe' src="https://www.youtube-nocookie.com/embed/knAYcg7Tt8E?controls=0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Info;