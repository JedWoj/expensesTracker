import classes from './BackgroundGradient.module.scss';

const BackgroundGradient = ({children}) => {
    return(
        <div className={classes['background-gradient']}>
            {children}
        </div>
    )
}

export default BackgroundGradient;