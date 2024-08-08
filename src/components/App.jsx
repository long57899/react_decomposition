import './App.css'
import { Header } from './Header'
import { Poster } from './Poster'
import { Search } from './Search'
import { WidjetMain } from './Widgets/WidjetMain'

function App() {
  return (
    <>
    <Header/>
    <Search image='https://adwebs.ru/upload/iblock/98a/rhus873ierncldvyonl8fgfjokvudw0n/reklama_v_yandekse.png'/>
    <Poster img={'http://wallpapers.gg/wp-content/uploads/2017/12/Fast-Furious-6-2013-HD-1440x960.jpg'}/>
    <WidjetMain/>
    </>
  )
}

export default App
