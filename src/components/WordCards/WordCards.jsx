import { useState } from 'react';
import Card from '../Card/Card';

function WordCards(props) {
    return (
        <div className='words__container'>
            {props.wordList.map((wordItem, index) =>
            <Card key={index} english={wordItem.english} transcription={wordItem.transcription} russian={wordItem.russian}/>
            )}
        </div>
    );
}

export default WordCards;