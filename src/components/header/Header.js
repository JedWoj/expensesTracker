import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
    return(
        <header className={classes.header}>
            <div className={classes.header__user}>
                <div className={classes['header__img-box']}>
                
                </div>
                <div>
                    <h1 className={classes.header__welcome}>
                        Welcome!
                    </h1>
                    <p className={classes.header__username}>
                        John Doe
                    </p>  
                </div>
            </div>
            <div className={classes['header__icon-box']}>
                <div className={classes.header__icon}>
                </div>
            </div>
        </header>
    )
}

export default Header;