import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {
  let count = useSelector(state => state.count)
  return (
    <div>
      <div className='border p-1'>
        Box{count}
      </div>
    </div>
  )
}

export default Box