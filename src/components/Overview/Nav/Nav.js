import classes from './Nav.module.scss';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav className={classes.navigation}>
            <div className={classes.navigation__link}>
                <div className={classes.navigation__icon}>
                    +
                </div>
            </div>
            <Link to="/add" className={classes['navigation__add-btn']}>
                <div className={`${classes.navigation__icon} ${classes['navigation__icon--white']}`}>
                    +
                </div>
            </Link>
            <div className={classes.navigation__link}>
                <div className={classes.navigation__icon}>
                    +
                </div>
            </div>
        </nav>
    )
}

export default Nav;