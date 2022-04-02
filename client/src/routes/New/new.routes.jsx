import './new.styles.css';
import { FETCH_MOVIE_ACTION } from '../../api/action'
const New = () => {
  const data = FETCH_MOVIE_ACTION()
  console.log(data.data)
  return (
    <div className='new-page'>
        <h2>NEW PAGE</h2>
    </div>
  )
}

export default New