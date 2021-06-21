import React from 'react';
import ChartBar from './Chartbar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(v => v.value);
    const maxvalue = Math.max(...dataPointValues);
    return(
        <div className="chart">
        {
            props.dataPoints.map(datapoint => <ChartBar label={datapoint.label} value={datapoint.value} maxValue={maxvalue} key={datapoint.label}/>)
        }
        </div>
    )

}
export default Chart;