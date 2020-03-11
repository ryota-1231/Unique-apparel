import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

class Address extends React.Component {
  render () {
    return (
      <Form>
        <Container>
          <p id='address-prefectures-input'>{this.props.prefectures}</p>
          <p id='address-city-input'>{this.props.city}</p>
        </Container>
        <TextField id='address-input' label='住所' fullWidth variant='outlined' size='small' />
      </Form>
    )
  }
}

Address.propTypes = {
  prefectures: PropTypes.string,
  city: PropTypes.string
}

const Form = styled.form`
`

const Container = styled.div`
  display: flex;
  padding: 15px 8px 8px;
`

export default Address
