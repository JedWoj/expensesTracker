import React from 'react';
import classes from './BackgroundGradient.module.scss';

interface BackgoundGradientProps {
    children: JSX.Element,
}

const BackgroundGradient = ({children}: BackgoundGradientProps) => {
    return(
        <div className={classes['background-gradient']}>
            {children}
        </div>
    )
}

export default BackgroundGradient;