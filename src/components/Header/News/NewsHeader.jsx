/**
 * Компонент заголовок новости
 * 'Сейчас в СМИ', 'в Германии', 'Рекомендуем'
 */

export const NewsHeader = (props) => {
  return (
    <nav className="news_header">
        <ul>
            <li><a href='#'>{props.children}</a></li>
        </ul>
    </nav>
  )
}
