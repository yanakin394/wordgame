import wordsArr from '../data/words.json';
import style from './Table.module.scss';
import editBtn from '../../assets/icons/edit.png';
import deleteBtn from '../../assets/icons/delete.png';

function Table() {
    return (
        <table className={style.table}>
            <caption className={style.table__title}>Список слов</caption>
            <thead>
                <tr>
                    <th className={style.col__title}>English</th>
                    <th className={style.col__title}>Транскрипция</th>
                    <th className={style.col__title}>Перевод</th>
                    <th className={style.col__title}>Редактировать/Удалить</th>
                </tr>
            </thead>
            <tbody>{wordsArr.map((item, index) => (
                <tr key={index}>
                    <th className={style.row}>{item.english}</th>
                    <th className={style.row}>{item.transcription}</th>
                    <th className={style.row}>{item.russian}</th>
                    <th className={style.row__btns}>
                        <img src={editBtn} alt="edit" className={style.edit__btn}/>
                        <img src={deleteBtn} alt="button" className={style.del__btn}/>
                    </th>
                </tr>))}
            </tbody>
        </table>
    );
}

export default Table;