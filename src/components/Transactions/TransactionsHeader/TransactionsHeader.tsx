import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Select from '../../UI/Select/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faCalendar } from '@fortawesome/free-regular-svg-icons';
import classes from './TransactionsHeader.module.scss';

const TransactionsHeader = () => {
    const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);

    return(
        <header className={classes['transactions-header']}>
            <Link to="/" className={classes['transactions-header__icon-box']}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className={classes['transactions-header__icon']} />
            </Link>
            <h1 className={classes['transactions-header__heading']}>
                Transactions
            </h1>
            <div className={classes['transactions-header__icon-box']}>
                <FontAwesomeIcon onClick={() => setSelectIsOpen(true)} icon={faCalendar} className={classes['transactions-header__icon']} />
            </div>
            {selectIsOpen && <Select handleVisibility={setSelectIsOpen} />}
        </header>
    )
}

export default TransactionsHeader;