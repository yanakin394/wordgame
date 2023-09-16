import style from '../WordCards/WordCards.module.scss';
import { useEffect, useState, useRef } from 'react';

export default function WordCards(props) {
    const btnRef = useRef(null);                   //создала реф для кнопки Перевести
    useEffect(()=> {
        btnRef.current.focus();
    }, [])

    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        setClicked(false);
    }, [props.currentIndex])

    const handleClick = () => {
        setClicked(!clicked);
        props.handleWordResult();           //передаю функцию для получения результата выученных слов
        
    }
    let result;
    if (props.learnedWords === 1 || 0) {                                    //условие для склонения слова СЛОВО
        result = <p className={style.card__result}>Вы выучили {props.learnedWords} слово.</p>;
        } if (props.learnedWords === 2 || 3 || 4) {
            result = <p className={style.card__result}>Вы выучили {props.learnedWords} слова.</p>;
            } else {
                result = <p className={style.card__result}>Вы выучили {props.learnedWords} слов.</p>;
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
            {result}
        </div>       
    );
}
//{<p className={style.card__result}>Вы выучили {props.learnedWords} слов.</p>}