import React from 'react';
import Button from '@material-ui/core/Button'

class  InterFaceContainer extends React.Component {
  render() {
    return (
      <div className='sign-in-bottom-area'>
        <h2>SNS Sign In </h2>
        <Button variant="outlined" id='google-btn' className='btn'>Google Account</Button>
        <Button variant="outlined" color="secondary" id='instagram-btn' className='btn' href='#'>Instagram Account</Button>
        <Button variant="outlined" color="primary" id='twitter-btn' className='btn' href='#'>Twitter Account</Button>
      </div>
    );
  }
}

export default  InterFaceContainer