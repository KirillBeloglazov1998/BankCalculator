import React from 'react';
import { connect } from "react-redux";
import { resultUpdate } from '../redux/resultContainerReducer';
import ResultEstate from './ResultEstate';

class ResultEstateAPI extends React.Component {

    resultNumModify = (num) => {
        let parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        let fin = parts.join(".");
        return fin;
    }

    resultUpdate = () => {
        if (this.props.condition) {
            let creditSum = +this.props.estatePriceNum.replace(/\s+/g, '') - +this.props.downPaymentNum.replace(/\s+/g, '');

            if(+this.props.downPaymentNum.replace(/\s+/g, '') > +this.props.estatePriceNum.replace(/\s+/g, '')/2 ) {
                
            }
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
        } else if (this.props.conditionCr) {
            let creditSum = +this.props.estatePriceNumCr.replace(/\s+/g, '');
            let months = +this.props.creditDurationNumCr * 12;
            let procentsNum = +this.props.interestRateNumCr / 100 / 12;
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
    }

    render() {
        return <>
            <ResultEstate
                credit={this.props.credit}
                procents={this.props.procents}
                fullSum={this.props.fullSum}
                monthPay={this.props.monthPay}
                needSalary={this.props.needSalary}
                finalSum={this.props.finalSum}
                resultUpdate={() => { this.resultUpdate() }}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        credit: state.resultContainer.credit,
        procents: state.resultContainer.procents,
        fullSum: state.resultContainer.fullSum,
        monthPay: state.resultContainer.monthPay,
        needSalary: state.resultContainer.needSalary,
        minSalary: state.resultContainer.minSalary,

        estatePriceNum: state.estateCalculatorContainer.estatePrice,
        downPaymentNum: state.estateCalculatorContainer.downPayment,
        creditDurationNum: state.estateCalculatorContainer.creditDuration,
        interestRateNum: state.estateCalculatorContainer.interestRate,
        condition: state.estateCalculatorContainer.condition,

        estatePriceNumCr: state.creditCalculatorContainer.estatePrice,
        creditDurationNumCr: state.creditCalculatorContainer.creditDuration,
        interestRateNumCr: state.creditCalculatorContainer.interestRate,
        conditionCr: state.creditCalculatorContainer.condition,
    }
}


let mapDispatchToProps = {
    resultUpdate,
}

const ResultEstateContainer = connect(mapStateToProps, mapDispatchToProps)(ResultEstateAPI)

export default ResultEstateContainer;