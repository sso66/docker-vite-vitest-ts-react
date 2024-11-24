// sample/List.tsx
import { AppState as AppProps } from './WatchContainer'
import './watchlist.css'

const WatchList = ({ form }: AppProps) => {
  const mapList = (): JSX.Element[] => {
    return form.map((i, j) => {
      return (
        <tr key={j}>
          <td>{i.name}</td>
          <td>{i.rate}</td>
          <td>{i.review}</td>
        </tr>
      )
    })
  }
  return (
    <div className='tableDiv'>
      <table>
        <tr>
          <th>Movie</th>
          <th>Rate</th>
          <th>Review</th>
        </tr>
        {mapList()}
      </table>
    </div>
  )
}

export default WatchList
