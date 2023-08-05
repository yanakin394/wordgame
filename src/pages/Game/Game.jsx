import words from '../../data/words.json';
import WordCards from '../../components/WordCards/WordCards';

function Game() {
    /* const [cardIndex, setCardIndex] = useState(); */
    return ( 
        <WordCards wordList={words}/>
    );
}

export default Game;