import React from 'react'
import Button from '@material-ui/core/Button'

export default function SellingButton () {
  return (
    <section className='listing-button-area'>
      <div className='selling-button-area'>
        <Button variant='contained' color='secondary' className='selling-button'>
          出品する
        </Button>
      </div>
      <div>
        <Button variant='contained' className='return-button'>もどる</Button>
      </div>
    </section>
  )
}
