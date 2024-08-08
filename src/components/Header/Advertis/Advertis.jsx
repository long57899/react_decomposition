/**
 * Компонент рекламы
 * "Работа над ошибками"
 */

export const Advertis = (props) => {
  
  const { image, title, text } = props;
  
  return (
    <div className="block_advertis">
      <img src={image} alt={``}></img>
      <div className="title_advertis">{title}</div>
      <div className="text_advertis">{text}</div>
    </div>
  )
}
