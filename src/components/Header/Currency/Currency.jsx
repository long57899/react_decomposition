/**
 * Компонент курса валют
 * props = {
 *      currency: '',
 *      rate: '',
 *      statistic: '',
 * }
 */

export const Currency = (props) => {
  
  const { currency } = props
  
  return (
    <nav className="currency">
        <ul>
            <li className={currency}>{props.children}</li>
        </ul>
    </nav>
  )
}
