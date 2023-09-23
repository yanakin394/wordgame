/* import words from '../../data/words.json'; */
import { useState, useContext } from 'react';
import Button from '../../components/Button/Button';
import WordCards from '../../components/WordCards/WordCards';
import Loader from '../../components/Loader/Loader';
import style from '../Game/Game.module.scss';
import { WordsContext } from '../../context/WordsContext';

function Game() {   
    const {words, setWords} = useContext(WordsContext); //вытаскиваем контекст из апи
    console.log(words);
    const [cardIndex, setCardIndex] = useState(0);
    const [wordResult, setWordResult] = useState(0);
    const handleBack = () => {
        setCardIndex(cardIndex - 1);
    }

    const handleForward = () => {
        setCardIndex(cardIndex + 1);
    }
    
    if(cardIndex === undefined) {                   //лоадер если карточки не подгружаются
        return (  
            <Loader/>
        )
    }
    //колбэк функция для отображения кол-ва изученных слов    
    const handleWordResult = () => {
        setWordResult(wordResult + 1);
        console.log('wordresult' + ' ' + wordResult);
    }
    console.log('wordresult2' + ' ' + wordResult)
    return ( 
        <div className={style.container}>
            <Button side={cardIndex === 0 ? 'btn__leftarrow-disabled' : 'btn__leftarrow'} onClick={() => handleBack()} disabled={cardIndex === 0}/>
            <WordCards wordList={words} currentIndex={cardIndex} handleWordResult={handleWordResult} learnedWords={wordResult}/>
            <Button side={cardIndex === words.length - 1 ? 'btn__rightarrow-disabled' : 'btn__rightarrow'} onClick={() => handleForward()} disabled={cardIndex === words.length - 1}/> 
        </div>
        
    );
}

export default Game;