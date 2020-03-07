import React from 'react'
import PropTypes from 'prop-types'
// import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(3)
//   }
// }))

// const [value, setValue] = React.useState('female')

class BusinessRadioButton extends React.Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e){
      // setValue(e.target.value)
      console.log(e)
  }

  render () {
    // const classes = useStyles()
    return (
      <div>
        <FormControl component='fieldset'>
          <RadioGroup aria-label='gender' name='gender2' onChange={(e) => this.handleChange (e)} row>
            <FormControlLabel
              value='corporation'
              control={<Radio color='primary' />}
              label={this.props.leftLabel}
              labelPlacement='end'
            />
            <FormControlLabel
              value='sole-proprietorship'
              control={<Radio color='primary' />}
              label={this.props.rightLabel}
              labelPlacement='end'
            />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
}

BusinessRadioButton.propTypes = {
  label: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string
}

export default BusinessRadioButton