import React from 'react';
import e from './CreditDuration.module.css'

const CreditDuration = (props) => {
    let creditDurationElement = React.createRef();
    let creditDuration = () => {
        let creditDurationNew = creditDurationElement.current.value;
        if(Number.isInteger(+creditDurationNew) && +creditDurationNew <= 30 && creditDurationNew[0] !== '0' && creditDurationNew.length <=2 ) {
            props.creditDuration(creditDurationNew)
        }
        if(creditDurationNew[0] === '0' ) {
            props.creditDuration(1)
        }
    }

    let creditDurationCheck = () => {
        if( props.creditDurationNum < 1) {
            props.creditDuration(1)
        }
    }


    return (
        <div>
            <span className={e.span}>Срок кредита: Лет</span>
            <input className={e.input}
                ref={creditDurationElement}
                value={props.creditDurationNum}
                onChange={creditDuration}
                onBlur ={creditDurationCheck}
            ></input>
        </div>
    )
}


export default CreditDuration;