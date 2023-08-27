import { NavLink, Link } from 'react-router-dom';
import style from './Header.module.scss'

function Header() {
    return (
        <div className={style.header__wrapper}>
            <div className={style.header__title_wrapper}>
                <Link to='/' className={style.header__title}>Flip & Learn</Link>
                <h2 className={style.header__motto}>Учи слова быстрее...</h2>
            </div>
            <nav className={style.nav}>
                <ul className={style.nav__list}>
                    <NavLink to='/' className={style.nav__item}>Главная</NavLink>
                    <NavLink to='/game' className={style.nav__item_game}>Играть в карточки</NavLink>
                    <NavLink to='/table' className={style.nav__item}>Список слов</NavLink>
                </ul>
            </nav>
        </div>        
    );
        
}

export default Header;

{/* <nav className={style.nav}>
                <ul className={style.nav__list}>
                    <li className={style.nav__item}>Главная</li>
                    <li className={style.nav__item_game}>Играть в карточки</li>
                    <li className={style.nav__item}>Список слов</li>
                </ul>
            </nav> */}