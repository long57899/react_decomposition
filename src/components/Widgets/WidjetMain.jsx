/**
 * Компонент меню виджетов
 */

import { Widget } from './Widget'

export const WidjetMain = () => {
  return (
    <div className='widjet_main'>
        <Widget
            title='Погода'
            url=''>
        </Widget>
        <Widget
            title='Карта германии'
            url=''>
        </Widget>
        <Widget
            title='Эфир'
            url=''>
        </Widget>
        <Widget
            title='Посещаемое'
            url=''>
        </Widget>
        <Widget
            title='Телепрограмма'
            url=''>
        </Widget>
    </div>
  )
}
