const ESTATE_PRICE_UPDATE = 'ESTATE-PRICE-UPDATE-CREDIT'
const CREDIT_DURATION_UPDATE = 'CREDIT-DURATION-UPDATE-CREDIT'
const INTEREST_RATE_UPDATE = 'INTEREST-RATE-UPDATE-CREDIT'
const CONDITION_UPDATE= 'CONDITION-UPDATE-CREDIT'

let initalState = {
    estatePrice: '1 000 000',
    creditDuration: 1,
    interestRate: 0.1,
    condition: false,
}

let creditCalculatorContainerReducer = (state = initalState, action) => {

    switch (action.type) {
        case ESTATE_PRICE_UPDATE: {
            return {
                ...state,
                estatePrice: action.price
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
    return { type: ESTATE_PRICE_UPDATE, price: price}
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

export default creditCalculatorContainerReducer;