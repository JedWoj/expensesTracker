import React from 'react';
import classes from './BackgroundGradientVisible.module.scss';

const BackgroundGradientVisible = ({children}) => {
    return(
        <div className={classes['background-gradient']}>
            {children}
        </div>
    )
}

export default BackgroundGradientVisible;