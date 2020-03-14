import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function p (props) {
  const descriptions = props.description
  const pTag = descriptions.map((description) =>
    <TextDescription
      key={description}
      className={props.className}
    >{description}
    </TextDescription>
  )
  return (
    <Container>
      {pTag}
    </Container>
  )
}

p.propTypes = {
  className: PropTypes.string,
  description: PropTypes.array
}

const Container = styled.div`
`

const TextDescription = styled.p`
  padding: 4px;
`
