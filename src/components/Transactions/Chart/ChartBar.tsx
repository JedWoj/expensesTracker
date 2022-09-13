import React from 'react';
import classes from './ChartBar.module.scss';

interface ChartBarProps {
    label: string,
    value: number,
    maxValue: number,
}

const ChartBar = ({label, value, maxValue}: ChartBarProps) => {
    let barFillHeight = '50%';

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