import words from '../../data/words.json';
import WordCards from '../../components/WordCards/WordCards';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import style from '../Game/Game.module.scss';

function Game(props) {    
    console.log(props.index);
    const [cardIndex, setCardIndex] = useState(1);
    const handleBack = () => {
        setCardIndex(cardIndex - 1);
        console.log(cardIndex);
    }
    const handleForward = () => {
        setCardIndex(cardIndex + 1);
        console.log(cardIndex);
    }
    console.log(cardIndex);
    return ( 
        <div className={style.container}>
            <Button side='btn__leftarrow' onClick={() => handleBack} disabled={cardIndex === 0}/>
            <WordCards wordList={words} currentIndex={cardIndex}/>
            <Button side='btn__rightarrow' onClick={() => handleForward} disabled={cardIndex === words.length - 1}/> 
        </div>
        
    );
}

export default Game;
