import React from 'react';
import e from './EstatePrice.module.css'

const EstatePrice = (props) => {
    let estatePriceElement = React.createRef();
    let estatePrice = () => {
        let estatePriceNew = estatePriceElement.current.value;
        estatePriceNew = estatePriceNew.replace(/\s+/g, '');
        if (Number.isInteger(+estatePriceNew) && +estatePriceNew <= 100000000 && estatePriceNew[0] !== '0' && estatePriceNew[estatePriceNew.length - 1] !== '.') {
            let parts = estatePriceNew.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            let fin = parts.join(".");
            props.estatePrice(fin)
        }
        if (estatePriceNew / 2 < props.downPaymentNum.replace(/\s+/g, '')) {
            let num = estatePriceNew / 2;
            let parts = num.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            let fin = parts.join(".");
            props.downPayment(fin);
        }

    }

    let estatePriceCheck = () => {
        let check = props.estatePriceNum.replace(/\s+/g, '');
        if (check < 500000) {
            props.estatePrice('500 000')
        }

    }

    return (
        <div>
            <span className={e.span}>Стоимость недвижимости: ₽</span>
            <input className={e.input}
                ref={estatePriceElement}
                value={props.estatePriceNum}
                onChange={estatePrice}
                onBlur={estatePriceCheck}
            ></input>
        </div>
    )
}


export default EstatePrice;