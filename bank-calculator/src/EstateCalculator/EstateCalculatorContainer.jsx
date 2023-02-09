import React from 'react';
import { connect } from "react-redux";
import { conditionUpdate, creditDuration, downPayment, estatePrice, interestRate } from '../redux/estateCalculatorContainerReducer';
import { resultUpdate } from '../redux/resultContainerReducer';
import EstateCalculator from './EstateCalculator';


class EstateCalculatorAPI extends React.Component {

    resultNumModify = (num) => {
        let parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        let fin = parts.join(".");
        return fin;
    }

    saveResult = () => {
        let creditSum = +this.props.estatePriceNum.replace(/\s+/g, '') - +this.props.downPaymentNum.replace(/\s+/g, '');

        let months = +this.props.creditDurationNum * 12;   
        let procentsNum = +this.props.interestRateNum / 100 / 12; 
        let finalSumMonth = creditSum * (procentsNum + (procentsNum / ((1 + procentsNum) ** months - 1)))
        let procents = finalSumMonth * months - creditSum;
        let allSum = procents + creditSum;
        let monthPay = finalSumMonth;
        let needSalary = monthPay + +this.props.minSalary;

        creditSum =  this.resultNumModify(creditSum.toFixed(0));
        procents = this.resultNumModify(procents.toFixed(0))
        allSum = this.resultNumModify(allSum.toFixed(0));
        monthPay = this.resultNumModify(monthPay.toFixed(0));
        needSalary = this.resultNumModify(needSalary.toFixed(0));           

        this.props.resultUpdate(creditSum, procents, allSum, monthPay, needSalary)
    }

    componentDidMount() {
        this.props.conditionUpdate(!this.props.condition)
        this.saveResult()
    }

    componentWillUnmount () {
        this.props.conditionUpdate(!this.props.condition)

    }

    render() {
        return <>
            <EstateCalculator
                estatePriceNum={this.props.estatePriceNum}
                downPaymentNum={this.props.downPaymentNum}
                creditDurationNum={this.props.creditDurationNum}
                interestRateNum={this.props.interestRateNum}
                estatePrice={this.props.estatePrice}
                downPayment={this.props.downPayment}
                creditDuration={this.props.creditDuration}
                interestRate={this.props.interestRate}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        estatePriceNum: state.estateCalculatorContainer.estatePrice,
        downPaymentNum: state.estateCalculatorContainer.downPayment,
        creditDurationNum: state.estateCalculatorContainer.creditDuration,
        interestRateNum: state.estateCalculatorContainer.interestRate,
        condition: state.estateCalculatorContainer.condition,
        minSalary: state.resultContainer.minSalary,
    }
}

const EstateCalculatorContainer = connect(mapStateToProps, {estatePrice,downPayment,creditDuration,interestRate,conditionUpdate,resultUpdate})(EstateCalculatorAPI)

export default EstateCalculatorContainer;