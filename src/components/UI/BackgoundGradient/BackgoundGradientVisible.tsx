import React from 'react';
import classes from './BackgroundGradientVisible.module.scss';

interface BackgoundGradientVisibleProps {
    children: JSX.Element,
}

const BackgroundGradientVisible = ({children}: BackgoundGradientVisibleProps) => {
    
    return(
        <div className={classes['background-gradient']}>
            {children}
        </div>
    )
}

export default BackgroundGradientVisible;