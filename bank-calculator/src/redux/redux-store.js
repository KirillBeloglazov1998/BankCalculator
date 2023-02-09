import { combineReducers,  legacy_createStore as createStore } from "redux";
import creditCalculatorContainerReducer from "./creditCalculatorContainerReducer";
import estateCalculatorContainerReducer from "./estateCalculatorContainerReducer";
import resultContainerReducer from "./resultContainerReducer";

let reducers = combineReducers({
    estateCalculatorContainer: estateCalculatorContainerReducer,
    resultContainer: resultContainerReducer,
    creditCalculatorContainer: creditCalculatorContainerReducer,
});

let store = createStore(reducers);

export default store;


