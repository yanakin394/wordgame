import { useState } from 'react';
import wordsArr from '../data/words.json';
import style from './Card.module.scss';

export default function Card() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
                }
            return (        
                <div className={style.card}>
                    <div className={style.card__wrapper}>
                        <div className={style.card__word}>
                            <p className={style.card__word}>{wordsArr[0].english}</p>
                            <p className={style.card__transcription}>{wordsArr[0].transcription}</p>
                        </div>
                        {clicked ? <p className={style.card__translation}>{wordsArr[0].russian}</p> : <button className={style.card__button} onClick={handleClick}>Проверить</button>}                     
                    </div>
                </div>       
            );
}
