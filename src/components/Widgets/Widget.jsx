/**
 * Компонент меню виджет
 */

export const Widget = (props) => {
  return (
    <div className='widjet'>
        <div className='widjet_title'><a href='#'>{props.title}</a></div>
        <div>{props.children}</div>
    </div>
  )
}
