import style from './button.module.scss';

function Button({onClick, side, ...rest}) {
    return (        
        <button className={style[side]} onClick={onClick} {...rest}></button>
    );
}

export default Button;