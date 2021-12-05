import {useEffect} from "react";
import './Alert.css';

function Alert(props) {
    const { name = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);



    return(
        <div className='alert'>
            <div className="alert_order">
                {name} добавлен в заказ
            </div>
        </div>
    )
}


export default Alert;