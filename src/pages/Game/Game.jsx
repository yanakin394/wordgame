import words from '../../data/words.json';
import WordCards from '../../components/WordCards/WordCards';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import style from '../Game/Game.module.scss';

function Game() {    
    const [cardIndex, setCardIndex] = useState(0);
    const handleBack = () => {
        setCardIndex(cardIndex - 1);
    }
    const handleForward = () => {
        setCardIndex(cardIndex + 1);
    }
    console.log(cardIndex);
    return ( 
        <div className={style.container}>
            <Button side={cardIndex === 0 ? 'btn__leftarrow-disabled' : 'btn__leftarrow'} onClick={() => handleBack()} disabled={cardIndex === 0}/>
            <WordCards wordList={words} currentIndex={cardIndex}/>
            <Button side={cardIndex === words.length - 1 ? 'btn__rightarrow-disabled' : 'btn__rightarrow'} onClick={() => handleForward()} disabled={cardIndex === words.length - 1}/> 
        </div>
        
    );
}

export default Game;
