import React from 'react';
import p from './ResultEstate.module.css';

const ResultEstate = (props) => {
    return (
        <div>
            <div className={p.monthPay}>Ваш ежемесячный платеж:<div className={p.monthPayFlex}> {props.monthPay} ₽ </div></div>
            <div  className={p.item}>Кредит <div className={p.itemChange}>{props.credit } ₽</div></div>
            <div className={p.item}>Проценты <div className={p.itemChange}>{props.procents} ₽</div></div>
            <div className={p.item}>Проценты + Кредит <div className={p.itemChange}>{props.fullSum} ₽</div></div>
            <div className={p.item}>Необходимый доход <div className={p.itemChange}>{props.needSalary} ₽</div></div>
            <button className={p.button} onClick={props.resultUpdate}>Рассчитать</button>
        </div>
        
    )
}

export default ResultEstate;