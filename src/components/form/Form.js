import './Form.css'



function Form() {


    return(
        <div className='feedback'>
            <div className="feedback_container">
                <form action="!#" className="form">
                    <label className='form_label'>
                        <input type="name" className='form_input' placeholder='Введите ваше имя'/>
                    </label>
                    <label className='form_label'>
                        <input type="email" className='form_input' placeholder='Введите email'/>
                    </label>
                    <label className='form_label'>
                        <input type="tel" className='form_input' placeholder='Введите номер телефона'/>
                    </label>

                </form>
            </div>
        </div>
    )
}

export default Form;