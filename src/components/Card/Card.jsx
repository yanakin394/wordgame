import { useState } from 'react';
import style from './Card.module.scss';

export default function Card(props) {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (        
        <div className={style.card}>
            <div className={style.card__wrapper}>
                <div className={style.card__word}>
                    <p className={style.card__word}>{props.english}</p>
                    <p className={style.card__transcription}>{props.transcription}</p>
                </div>
            {clicked ? <p className={style.card__translation}>{props.russian}</p> : <button className={style.card__button} onClick={handleClick}>Проверить</button>}                     
            </div>
        </div>       
    );
}
