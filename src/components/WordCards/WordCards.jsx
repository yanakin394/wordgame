import { useState } from 'react';
import Card from '../Card/Card';

function WordCards(props) {
    return (        
        <div className='words__container'>
            <Card key={props.index}
                english={props.wordList[props.currentIndex].english}
                transcription={props.wordList[props.currentIndex].transcription}
                russian={props.wordList[props.currentIndex].russian}
            />
        </div>
    );
}

export default WordCards;

/* <div className='words__container'>
            {props.wordList.map((wordItem, index) =>
            <Card key={index} english={wordItem.english} transcription={wordItem.transcription} russian={wordItem.russian}/>
            )}
        </div> */