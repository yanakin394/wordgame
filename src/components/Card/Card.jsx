import { useState } from 'react';
import wordsArr from '../data/words.json';
import style from './Card.module.scss';

export default function Card(props) {
    console.log(props.english);
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
                }
            return (        
                <div className={style.card}>
                    <button className={style.card__leftarrow}></button>
                    <div className={style.card__wrapper}>
                        <div className={style.card__word}>
                            <p className={style.card__word}>{wordsArr[0].english}</p>
                            <p className={style.card__transcription}>{wordsArr[0].transcription}</p>
                        </div>
                        {clicked ? <p className={style.card__translation}>{wordsArr[0].russian}</p> : <button className={style.card__button} onClick={handleClick}>Проверить</button>}                     
                    </div>
                    <button className={style.card__rightarrow}></button>
                </div>       
            );
}
