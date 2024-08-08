import { NewsHeader } from "./NewsHeader"
import { NewsList } from "./NewsList"

export const News = () => {
  return (
    <div className="news">
      <NewsHeader/>
      <NewsList/>
    </div>
  )
}
