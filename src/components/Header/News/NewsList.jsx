/**
 * Компонент список новостей
 * props = {
 *      title: '',
 *      url: '',
 *      icon: '',
 * }
 */

export const NewsList = (props) => {
  return (
    <ul>
        <li className="news_content">
            <a href='#'>{props.children}</a>
        </li>
    </ul>
  )
}
