import React from 'react';
import e from './InterestRate.module.css'

const InterestRate = (props) => {
    let interestRateElement = React.createRef();
    let interestRate = () => {
        let interestRateNew = interestRateElement.current.value;
        let check = [
            interestRateNew !== '00',
            interestRateNew !== '01',
            interestRateNew !== '02',
            interestRateNew !== '03',
            interestRateNew !== '04',
            interestRateNew !== '05',
            interestRateNew !== '06',
            interestRateNew !== '07',
            interestRateNew !== '08',
            interestRateNew !== '09',
            interestRateNew !== '0.0',
            interestRateNew !== '30.',
            interestRateNew[3] !== '0',
      
        ]
        if(!check.includes(false)) {
            if (( (Number.isInteger(+interestRateNew) ) || interestRateNew[2] === '.' ) && +interestRateNew <= 30 && interestRateNew.length <= 4 ) {
                props.interestRate(interestRateNew)            
        }

        if (interestRateNew[1] === '.' && interestRateNew[2] !== '.' && interestRateNew.length <= 4 ) { 
            props.interestRate(interestRateNew)
        }
        }
 
    }

    let interestRateCheck = () => {
        if(props.interestRateNum === null || props.interestRateNum < 0.1) {
            props.interestRate(0.1)
        }
    }

    return (
        <div>
            <span className={e.span}>Процентная ставка: %</span>
            <input className={e.input}
                ref={interestRateElement}
                value={props.interestRateNum}
                onChange={interestRate}
                onBlur={interestRateCheck}
            ></input>
        </div>
    )
}


export default InterestRate;