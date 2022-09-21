import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import classes from './Nav.module.scss';
import {Link} from 'react-router-dom';
import LogoutModal from '../../Logout/LogoutModal';
import ReactPortal from '../../ReactPortal/ReactPortal';

const Nav = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return(
        <>
            <nav className={classes.navigation}>
                <div onClick={setShowModal.bind(null, true)} className={classes.navigation__link}>
                    <div className={classes.navigation__icon}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </div>
                </div>
                <Link to="/add" className={classes['navigation__add-btn']}>
                    <div className={`${classes.navigation__icon} ${classes['navigation__icon--white']}`}>
                        +
                    </div>
                </Link>
                <Link to="/transactions" className={`${classes.navigation__link} ${classes['navigation__link--stretched']}`}>
                    <div className={classes.navigation__icon}>
                        <FontAwesomeIcon icon={faBarChart} rotation={270} />
                    </div>
                </Link>
            </nav>
            {showModal && <ReactPortal wrapperId='root'>
                <LogoutModal closeModal={setShowModal} />
            </ReactPortal>}
        </>
    )
}

export default Nav;