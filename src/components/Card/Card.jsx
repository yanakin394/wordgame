import style from './Card.module.scss';

function Card() {
    return (
        <div className={style.card}>
            {/* <p className={style.card__rule}>Нажмите на карточку, чтобы она перевернулась</p> */}
            <div className={style.card__flipper}>
                <div className={style.card__front}>
                    <p className={style.card__word}>Word</p>
                    <p className={style.card__transcription}>transcription</p>
                </div>
                <div className={style.card__back}>
                    <p className={style.card__translation}>Translation</p>
                </div>
            </div>
        </div>
    );
}

export default Card;