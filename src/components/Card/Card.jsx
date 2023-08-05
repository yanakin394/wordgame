import { useState } from 'react';
import style from './Card.module.scss';
import Button from '../Button/Button';

export default function Card(props) {
    console.log(props);
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
                }
            return (        
                <div className={style.card}>
                    {/* <button className={style.card__leftarrow}></button> */}
                    <Button side='btn__leftarrow'/>
                    <div className={style.card__wrapper}>
                        <div className={style.card__word}>
                            <p className={style.card__word}>{props.english}</p>
                            <p className={style.card__transcription}>{props.transcription}</p>
                        </div>
                        {clicked ? <p className={style.card__translation}>{props.russian}</p> : <button className={style.card__button} onClick={handleClick}>Проверить</button>}                     
                    </div>
                    <Button side='btn__rightarrow'/>
                    {/* <button className={style.card__rightarrow}></button> */}
                </div>       
            );
}
