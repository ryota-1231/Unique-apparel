import React from 'react'
import Button from '@material-ui/core/Button'

export default function ContainedButtons () {
  return (
    <div>
      <p className='button-block'><Button href='#' variant='contained' color='primary' className='btn'>続けて出品</Button></p>
      <p className='button-block'><Button href='#' variant='contained' color='primary' className='btn'>シェアする</Button></p>
      <p><Button href='#text-buttons' color='primary'>ホームへ</Button></p>
    </div>
  )
}
