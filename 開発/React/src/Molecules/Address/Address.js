import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import P from '../../Atoms/input/description'

class Address extends React.Component {
  render () {
    return (
      <Form>
        <P description={[this.props.prefectures + ' ' + this.props.city]} />
        <TextField label='住所' fullWidth variant='outlined' size='small' />
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

export default Address
