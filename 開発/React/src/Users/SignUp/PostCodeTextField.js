import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const BasicTextFields = (props) => {
  const classes = useStyles()
  const { buttonText } = props;

  return (
    <form id='postcode-form' className={classes.root} noValidate autoComplete='off'>
      <TextField id='postcode' label='郵便番号' variant='outlined' />
      <TextField id='postcode' label='test' variant='outlined' value={ buttonText } />
      <Button id='address-auto-input-interface' variant='contained' color='primary' onClick={props.onClick}>住所自動入力</Button>
      <Link href='https://www.post.japanpost.jp/zipcode/index.html'><Button id='post-code-search-interface' color='primary'>郵便番号を検索</Button></Link>
    </form>
  )
}

BasicTextFields.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};

class PostCodeTextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: 'click me!',
      products: ''
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_DEV_API_KEY
    axios.get(GEOCODE_ENDPOINT, { params: { key : API_KEY, address : 2340052, language : 'ja', sensor : false } })
    .then((results) => {
      console.log(results)
      this.setState({products: results.data})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  onClick() {
    console.log('click!');
  }

  // handleInput = (e) => {
  //   this.setState({updateText: e.target.value})
  // }

  render() {
    const { buttonText } = this.state;
    return (
      <div>
        <BasicTextFields
          buttonText={buttonText}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default PostCodeTextField