import Card from '../Card/Card';
import wordsArr from '../../data/words.json';

function Words() {
    return (
        <div className='words__container'>
            {wordsArr.map((wordItem, index) =>
            <Card key={index} english={wordItem.english} transcription={wordItem.transcription} russian={wordItem.russian}/>
            )}
        </div>
    );
}

export default Words;