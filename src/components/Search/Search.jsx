/**
 * Компонент поисковое меню
 */

import { SearchMenu } from "./SearchMenu"

export const Search = ({ image }) => {
  return (
    <div className="search" style={{ display: 'flex' }}>
        <SearchMenu/>
        <img src={image} alt={``} style={{ width: '50px', height: '50px' }}></img>
        <form className="search_form">
            <input className="search_input"></input>
            <button className="search_btn">Найти</button>
        </form>
        <div className={'search_help'}>Найдётся всё. Например, фаза луны сегодня</div>
    </div>
  )
}
