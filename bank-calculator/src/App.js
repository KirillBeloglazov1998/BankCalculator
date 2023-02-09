import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import p from './App.module.css'
import EstateCalculatorContainer from "./EstateCalculator/EstateCalculatorContainer";
import ResultEstateContainer from "./ResultEstate/ResultEstateContainer";
import CreditCalculatorContainer from "./CreditCalculator/CreditCalculatorContainer";

const App = () => {
    return (
        <BrowserRouter>
        <div className={p.mainPage}>
            <div className={p.Navigation}><Nav/></div>
            <div className={p.Calculators}>
            <Routes>
                <Route path="/creditCalculator/" element={<CreditCalculatorContainer/>} />
                <Route path="/estateCalculator/" element={<EstateCalculatorContainer/>}/>
                <Route path="/" element={<EstateCalculatorContainer/>}/>
            </Routes>
            </div>
            <div className={p.Result}><ResultEstateContainer/></div>
            </div>
        </BrowserRouter>
    )
}

export default App;
