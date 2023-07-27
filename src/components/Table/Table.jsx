import wordsArr from '../data/words.json';
import style from './Table.module.scss';
import editBtn from '../../assets/icons/edit.png';
import deleteBtn from '../../assets/icons/delete.png';

function Table() {
    return (
        <table className={style.table}>
            <caption className={style.table__title}>Word List</caption>
            <thead>
                <tr>
                    <th className={style.col_title}>English</th>
                    <th className={style.col_title}>Transcription</th>
                    <th className={style.col_title}>Translation</th>
                    <th className={style.col_title}>Edit/Delete</th>
                </tr>
            </thead>
            <tbody> {wordsArr.map((item, index) => (
                <tr key={index}>
                    <th className={style.td}>{item.english}</th>
                    <th className={style.td}>{item.transcription}</th>
                    <th className={style.td}>{item.russian}</th>
                    <th className={style.td}>
                        <img src={editBtn} alt="edit" className={style.edit__btn}/>
                        <img src={deleteBtn} alt="button" className={style.del__btn}/>
                    </th>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;