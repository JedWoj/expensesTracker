import React from "react";
import { useAppDispatch } from "../../hooks";
import userSlice from "../../store/userSlice";
import BackgroundGradientVisible from "../UI/BackgoundGradient/BackgoundGradientVisible";
import classes from './LogoutModal.module.scss';

interface LogoutModalType {
    closeModal: Function;
}

const LogoutModal = ({closeModal}: LogoutModalType) => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(userSlice.actions.logOut());
    }

    return(
        <BackgroundGradientVisible>
            <div className={classes['logout-modal']}>
                <h1 className={classes['logout-modal__heading']}>
                    Do you want to logout?
                </h1>
                <div className={classes['logout-modal__container']}>
                    <button onClick={handleLogout} className={classes['logout-modal__btn']} type="button">
                        Confirm
                    </button>
                    <button onClick={() => closeModal()} className={classes['logout-modal__btn']} type="button">
                        Cancel
                    </button>
                </div>
            </div>
        </BackgroundGradientVisible>
    )
}

export default LogoutModal;