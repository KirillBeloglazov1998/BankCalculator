import React from 'react';
import e from './DownPayment.module.css'

const DownPayment = (props) => {
    let downPaymentElement = React.createRef();

    let downPayment = () => {

        let downPaymentNew = downPaymentElement.current.value;
        downPaymentNew = downPaymentNew.replace(/\s+/g, '');

        let check = [
            downPaymentNew !== '00',
            downPaymentNew !== '01',
            downPaymentNew !== '02',
            downPaymentNew !== '03',
            downPaymentNew !== '04',
            downPaymentNew !== '05',
            downPaymentNew !== '06',
            downPaymentNew !== '07',
            downPaymentNew !== '08',
            downPaymentNew !== '09',
        ]

        let check2 = [
            downPaymentNew[1] === '1',
            downPaymentNew[1] === '2',
            downPaymentNew[1] === '3',
            downPaymentNew[1] === '4',
            downPaymentNew[1] === '5',
            downPaymentNew[1] === '6',
            downPaymentNew[1] === '7',
            downPaymentNew[1] === '8',
            downPaymentNew[1] === '9',
        ]

        if (Number.isInteger(+downPaymentNew) && (props.estatePriceNum.replace(/\s+/g, '') / 2 >= +downPaymentNew) && !check.includes(false)) {

            let parts = downPaymentNew.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            let fin = parts.join(".");
            props.downPayment(fin)

        }
        if (+downPaymentNew[0] === 0 && check2.includes(true)) {
            props.downPayment(downPaymentNew[1])
        }

    }

    let downPaymentCheck = () => {
        let downPaymentNew = downPaymentElement.current.value;
        if (downPaymentNew === '' || (props.estatePriceNum.replace(/\s+/g, '') / 2 < +downPaymentNew)) {
            props.downPayment('0')
        }
    }

    return (
        <div>
            <span className={e.span}>Первоначальный взнос: ₽</span>
            <input className={e.input}
                ref={downPaymentElement}
                value={props.downPaymentNum}
                onChange={downPayment}
                onBlur={downPaymentCheck}
            ></input>
        </div>
    )
}


export default DownPayment;