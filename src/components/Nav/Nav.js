import classes from './Nav.module.scss';

const Nav = () => {
    return(
        <nav className={classes.navigation}>
            <div className={classes.navigation__link}>
                <div className={classes.navigation__icon}>
                    +
                </div>
            </div>
            <div className={classes['navigation__add-btn']}>
                <div className={`${classes.navigation__icon} ${classes['navigation__icon--white']}`}>
                    +
                </div>
            </div>
            <div className={classes.navigation__link}>
                <div className={classes.navigation__icon}>
                    +
                </div>
            </div>
        </nav>
    )
}

export default Nav;