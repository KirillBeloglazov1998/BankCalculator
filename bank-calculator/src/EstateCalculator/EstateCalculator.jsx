import React from 'react';
import CreditDuration from './Elements/CreditDuration/CreditDuration';
import DownPayment from './Elements/DownPayment/DownPayment';
import EstatePrice from './Elements/EstatePrice/EstatePrice';
import InterestRate from './Elements/InterestRate/InterestRate';


const EstateCalculator = (props) => {

    return (
        <div>
            <EstatePrice downPaymentNum = {props.downPaymentNum} estatePriceNum = {props.estatePriceNum} downPayment = {props.downPayment} estatePrice = {props.estatePrice} />
            <DownPayment estatePriceNum = {props.estatePriceNum} downPaymentNum = {props.downPaymentNum} downPayment = {props.downPayment}/>
            <CreditDuration creditDuration = {props.creditDuration} creditDurationNum = {props.creditDurationNum}/>
            <InterestRate interestRateNum = {props.interestRateNum} interestRate = {props.interestRate}/>
        </div>
    )

}

export default EstateCalculator;