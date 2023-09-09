import style from '../WordCards/Word.module.scss';
import { useEffect, useState, useRef, forwardRef } from 'react';

export default function WordCards(props) {
    const btnRef = useRef(null);                   //создала реф для кнопки Перевести
    useEffect(()=> {
        btnRef.current.focus();
    }, [])
    const [clicked, setClicked] = useState(false);
    console.log(props.currentIndex);
    useEffect(() => {
        setClicked(false);
    }, [props.currentIndex])
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (        
        <div className={style.card}>
            <div className={style.card__wrapper}>
                <div className={style.card__word}>
                    <p className={style.card__word}>{props.wordList[props.currentIndex].english}</p>
                    <p className={style.card__transcription}>{props.wordList[props.currentIndex].transcription}</p>
                </div>
            {clicked ? <p className={style.card__translation}>{props.wordList[props.currentIndex].russian}</p> : <button className={style.card__button} ref={btnRef} onClick={handleClick}>Проверить</button>}
            </div>
        </div>       
    );
}
