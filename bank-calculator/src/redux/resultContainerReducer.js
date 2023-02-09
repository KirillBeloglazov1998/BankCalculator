const RESULT_UPDATE = 'RESULT-UPDATE'

let initalState = {
    credit: 0,
    procents: 0,
    fullSum: 0,
    monthPay: 0,
    needSalary: 0,
    minSalary: 13919,
}

let resultContainerReducer = (state = initalState, action) => {

    switch (action.type) {
        case RESULT_UPDATE: {
            return {
                ...state,
                credit: action.credit,
                procents: action.procents,
                fullSum: action.fullSum,
                monthPay: action.monthPay,
                needSalary: action.needSalary,
            }
        }

        default: {
            return state
        }

    }

}

export const resultUpdate = (credit, procents, fullSum, monthPay, needSalary) => {
    
    return {
        type: RESULT_UPDATE,
        credit: credit,
        procents: procents,
        fullSum: fullSum,
        monthPay: monthPay,
        needSalary: needSalary,
    }
}

export default resultContainerReducer;