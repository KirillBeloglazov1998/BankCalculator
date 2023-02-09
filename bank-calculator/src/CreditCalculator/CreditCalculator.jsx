import React from 'react';
import CreditDuration from './Elements/CreditDuration/CreditDuration';
import EstatePrice from './Elements/EstatePrice/EstatePrice';
import InterestRate from './Elements/InterestRate/InterestRate';

const CreditCalculator = (props) => {

    return (
        <div>
            <EstatePrice estatePriceNum = {props.estatePriceNum} estatePrice = {props.estatePrice} />
            <CreditDuration creditDuration = {props.creditDuration} creditDurationNum = {props.creditDurationNum}/>
            <InterestRate interestRateNum = {props.interestRateNum} interestRate = {props.interestRate}/>
        </div>
    )

}

export default CreditCalculator;