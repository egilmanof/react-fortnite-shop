import {useState, useEffect} from "react";
import './Form.css'


function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [massage, setMassage] = useState('');

    const [nameTrack, setNameTrack] = useState(false);
    const [emailTrack, setEmailTrack] = useState(false);
    const [massageTrack, setMassageTrack] = useState(false);

    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [massageError, setMassageError] = useState('Email не может быть пустым');

    const [formValid, setFormValid] = useState(false);

    useEffect( () => {
        if (nameError || emailError || massageError) {
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }

    }, [nameError ,emailError, massageError]);


    function nameHandler(event) {
        setName(event.target.value);

        if (event.target.value.length < 3) {
            setNameError('Минимум 3 символа');
        } else {
            setNameError('');
        }
    }

    function emailHandler(event) {
        setEmail(event.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(event.target.value)) {
            setEmailError('Проверьте введенный email');
        } else {
            setEmailError('');
        }
    }

    function massageHandler(event) {
        setMassage(event.target.value);
        if (event.target.value.length < 10) {
            setMassageError('Минимум 10 символов')
            if (!event.target.value) {
                setMassageError('Поле не должно быть пустым');
            }
        } else {
            setMassageError('');
        }
    }


    function handleBlur(event) {
        switch (event.target.name) {
            case 'name':
                setNameTrack(true);
                break
            case 'email':
                setEmailTrack(true);
                break
            case 'massage':
                setMassageTrack(true);
                break
            default:
        }
    }

    return (
        <div className='feedback'>
            <div className="feedback_container">
                <form action="/feedback" className="form">
                    <h1 className='form_title'>Обратная связь</h1>
                    {
                        (nameTrack && nameError) && <div style={{color: 'red'}}>{nameError}</div>
                    }
                    <input
                        type="text"
                        placeholder='Введите ваше имя'
                        className='form_input'
                        name='name'
                        value={name}
                        onBlur={event => handleBlur(event)}
                        onChange={event => nameHandler(event)}
                    />
                    {
                        (emailTrack && emailError) && <div style={{color: 'red'}}>{emailError}</div>
                    }
                    <input
                        type="email"
                        placeholder='Введите email'
                        className='form_input'
                        name='email'
                        onBlur={event => handleBlur(event)}
                        value={email}
                        onChange={event => emailHandler(event)}
                    />
                    {
                        (massageTrack && massageError) && <div style={{color: 'red'}}>{massageError}</div>
                    }
                    <textarea
                        placeholder='Ваше сообщение...'
                        className='form_text'
                        name="massage"
                        value={massage}
                        onBlur={event => handleBlur(event)}
                        onChange={event => massageHandler(event)}
                    />
                    <button disabled={!formValid} className='form_btn' type='submit'>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Form;