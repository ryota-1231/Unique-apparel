import React from 'react'
import Button from '@material-ui/core/Button'

export default function SellingEditButton () {
  return (
    <section className='listing-button-area'>
      <div className='selling-button-area'>
        <Button variant='contained' color='secondary' className='selling-button'>
          編集を完了する
        </Button>
      </div>
      <div>
        <Button variant='contained' className='return-button'>もどる</Button>
      </div>
    </section>
  )
}
