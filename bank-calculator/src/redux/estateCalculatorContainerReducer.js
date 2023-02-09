const ESTATE_PRICE_UPDATE = 'ESTATE-PRICE-UPDATE'
const DOWN_PAYMENT_UPDATE = 'DOWN-PAYMENT-UPDATE'
const CREDIT_DURATION_UPDATE = 'CREDIT-DURATION-UPDATE'
const INTEREST_RATE_UPDATE = 'INTEREST-RATE-UPDATE'
const CONDITION_UPDATE = 'CONDITION-UPDATE'

let initalState = {
    estatePrice: '500 000',
    downPayment: '0',
    creditDuration: 1,
    interestRate: 0.1,
    condition: false,
    estatePriceFinal: 500000,

}

let estateCalculatorContainerReducer = (state = initalState, action) => {

    switch (action.type) {
        case ESTATE_PRICE_UPDATE: {
            return {
                ...state,
                estatePrice: action.price,
            }
        }

        case DOWN_PAYMENT_UPDATE: {
            return {
                ...state,
                downPayment: action.payment
            }
        }

        case CREDIT_DURATION_UPDATE: {
            return {
                ...state,
                creditDuration: action.duration
            }
        }

        case INTEREST_RATE_UPDATE: {
            return {
                ...state,
                interestRate: action.rate
            }
        }

        case CONDITION_UPDATE: {
            return {
                ...state,
                condition: action.condition
            }
        }

        default: {
            return state
        }
    }

}

export const estatePrice = (price) => {
    return { type: ESTATE_PRICE_UPDATE, price: price, }
}

export const downPayment = (payment) => {
    return { type: DOWN_PAYMENT_UPDATE, payment: payment}
}

export const creditDuration = (duration) => {
    return { type: CREDIT_DURATION_UPDATE, duration: duration}
}

export const interestRate = (rate) => {
    return { type: INTEREST_RATE_UPDATE, rate: rate}
}

export const conditionUpdate = (condition) => {
    return { type: CONDITION_UPDATE, condition: condition}
}


export default estateCalculatorContainerReducer;