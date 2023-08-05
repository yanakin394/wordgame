import style from './button.module.scss';

function Button(props) {
    return (        
        <button className={style[props.side]}></button>
    );
}

export default Button;


{/* <button className={style.card__leftarrow}></button> */}