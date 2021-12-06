import './Form.css'


function Form() {


    return (
        <div className='feedback'>
            <div className="feedback_container">
                <form action="!#" className="form">
                    <h1 className='form_title'>Обратная связь</h1>
                    <input type="name" className='form_input' placeholder='Введите ваше имя'/>
                    <input type="email" className='form_input' placeholder='Введите email'/>
                    <input type="tel" className='form_input' placeholder='Введите номер телефона'/>
                    <textarea className='form_text' name="massage" placeholder='Ваше сообщение...'/>
                </form>
            </div>
        </div>
    )
}

export default Form;