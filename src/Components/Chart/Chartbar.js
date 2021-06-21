import React from 'react';
import './Chartbar.css';

const ChartBar = (props) => {
    let minValue = '0%'
    if(props.value>0){
        minValue =   Math.round((props.value/props.maxValue)*100) + '%';
    }
    const style = {
        height: minValue
    }    
    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={style}>
                </div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}
export default ChartBar;