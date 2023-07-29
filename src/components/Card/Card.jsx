import wordsArr from '../data/words.json';
import style from './Card.module.scss';

function Card() {
    return (
        
        <div className={style.card}>{wordsArr.map((wordItem, index) => (
            <div className={style.card__wrapper} key={index}>
                <div className={style.card__word}>
                    <p className={style.card__word}>{wordItem.english}</p>
                    <p className={style.card__transcription}>{wordItem.transcription}</p>
                </div>
                <button className={style.card__button}>Проверить</button>
                {/* <p className={style.card__translation}>{wordItem.russian}</p> */}
            </div>
            ))}
        </div>       
    );
}

export default Card;