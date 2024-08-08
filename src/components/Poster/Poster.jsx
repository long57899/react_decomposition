/**
 * Компонент постер фильма
 */

export const Poster = (props) => {
    
    const { img } = props
  
    return (
    <img className="poster"
    src={img}
    alt=''
    style={{ width: '70%', height: '300px' }}
    />
  )
}
