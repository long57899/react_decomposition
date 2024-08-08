/**
 * Компонент список меню над строкой поиска
 * 
 */

export const SearchMenu = (props) => {
  
    const { title } = props

    return (
        <nav className="search_nav">
            <ul>
                <li className={title}>
                    <a href='#'>{props.children}</a>
                </li>
            </ul>
        </nav>
    )
}
