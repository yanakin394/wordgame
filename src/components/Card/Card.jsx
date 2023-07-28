import style from './Card.module.scss';

function Card() {
    return (
        <div className={style.card}>
            <div className={style.card__word}>
                <p className={style.card__word}>Word</p>
                <p className={style.card__transcription}>transcription</p>
            </div>
            <button className={style.card__button}>Проверить</button>
            {/* <p className={style.card__translation}>Translation</p> */}
        </div>
    );
}

export default Card;