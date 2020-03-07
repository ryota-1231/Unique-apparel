import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PostCode from './PostCode'
import AddressTextField from './AddressTextField'

// Google Map Api
const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json'

class AddressGetApi extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      postCode: '',
      prefectures: '都道府県/市区町村',
      city: ''
    }
    this.submitAddress = this.submitAddress.bind(this)
  }

  // APIアクセス
  submitAddress (e) {
    // API_KEY設定（環境変数）
    const API_KEY = process.env.REACT_APP_DEV_API_KEY
    // paramsにAPI_KEY,e=郵便番号などを渡してgetで取得
    axios.get(GEOCODE_ENDPOINT, { params: { key: API_KEY, address: e, language: 'ja', sensor: false } })
      .then((results) => {
        const data = results.data
        const result = data.results[0]
        const addressArray = result.address_components
        // 都道府県市区町村郵便番号に情報を加工
        addressArray.pop()
        const address = addressArray.map((address) => address.long_name)
        const prefectures = address.slice(-1).join()
        const address1 = address.slice(-2, -1).join()
        const address2 = address.slice(-3, -2).join()
        this.setState({
          prefectures: prefectures,
          city: address1 + address2
        })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render () {
    return (
      <div id='address-field'>
//    --------------------郵便番号入力--------------------
        <PostCode
          submitAddress={this.submitAddress}
        />
//    --------------------住所自動入力--------------------
        <AddressTextField
          prefectures={this.state.prefectures}
          city={this.state.city}
        />
      </div>
    )
  }
}

AddressGetApi.propTypes = {
  postCode: PropTypes.string,
  address: PropTypes.string
}

export default AddressGetApi
