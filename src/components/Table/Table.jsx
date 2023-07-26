import wordsArr from '../data/words.json';
import style from './Table.module.scss';

function Table() {
    return (
        <table className={style.table}>
            <caption>Word List</caption>
            <tr>
                <th className={style.td}>English</th>
                <th className={style.td}>Transcription</th>
                <th className={style.td}>Translation</th>
                <th className={style.td}>Edit/Delete</th>
            </tr>
        </table>
    );
}

export default Table;