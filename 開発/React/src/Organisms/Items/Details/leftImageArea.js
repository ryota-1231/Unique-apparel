import React from 'react'
import styled from 'styled-components'


export default function ImageDetails (props) {
  const items = props.items
  const itemList = items.map((item) => 
    <li>
      <img src={item.images} size='100 100'/>
    </li>
  )
  return (
    <Wrapper>
      <Container>
      {/* className="screen" */}
      </Container>
      <ul>
        
        <li><span></span><div></div></li>
        <li><span></span><div></div></li>
        <li><span></span><div></div></li>
        <li><span></span><div></div></li>
        <li><span></span><div></div></li>
      </ul>
    </Wrapper>
      
  )
}

const Wrapper = styled.section`
  height: 600px;
  width: 500px;
  background-color: blue;
`

const Container = styled.div`
  height: 500px;
  width: 500px;
  background-color: green;
  z-index: 10;
`