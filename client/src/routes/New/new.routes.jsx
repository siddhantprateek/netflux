import './new.styles.css';
import axios from 'axios'
import { useEffect } from 'react';
const New = () => {
  // console.log(data.data)
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/tmdb/action')
    .then((res) => {
      console.log(res.data.results)
    })
    .catch((error) => console.error(error))
  }, [])

  return (
    <div className='new-page'>
        <h2>NEW PAGE</h2>
    </div>
  )
}

export default New