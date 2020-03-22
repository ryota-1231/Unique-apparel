import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


export default function ImageDetails (props) {
  const items = props.items
  const images = items.images
  const imageList = images.map((image, i) => i==0? 
  <li key={items.id * i} style={{height: 500}}>
    <img src={image} id={i} width='500' height='500'/>
  </li>
  :
  <li key={items.id * i}>
    <img src={image} id={i} width='100' height='100'/>
  </li>
    
  )
  return (
    <Wrapper>
      <Ul>
        {imageList}
      </Ul>
    </Wrapper>
  )
}

ImageDetails.propTypes = {
  images: PropTypes.object,
  items: PropTypes.object
}

const Wrapper = styled.section`
  height: 600px;
  width: 500px;
  background-color: blue;
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`