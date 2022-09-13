import React from 'react';
import classes from './ChartBar.module.scss';

interface ChartBarProps {
    label: string,
    value: number,
    maxValue: number,
}

const ChartBar = ({label, value, maxValue}: ChartBarProps) => {
    let barFillNumber = `${(value/maxValue)* 100}`;
    let barFillHeight = `${barFillNumber}%`;
   
    return(
        <div className={classes['chart-bar']}>
            <div className={classes['chart-bar__inner']}>
                <div style={{height: barFillHeight}} className={classes['chart-bar__fill']}>

                </div>
            </div>
            <div className={classes['chart-bar__label']}>
                {label}
            </div>
        </div>
    )
}

export default ChartBar;