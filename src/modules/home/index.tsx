import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { ENotify } from 'src/constants/enum'
import { setLayoutNotify } from 'src/store/actions'

const Home:FC = () => {
  const dispatch = useDispatch()

  const handleNotify = () => {
    dispatch(setLayoutNotify({
      open: true,
      type: ENotify.SUCCESS,
      content: 'asdasdasd'
    }))
  }

  return (
    <div onClick={handleNotify}>Home page</div>
  )
}

export default Home
