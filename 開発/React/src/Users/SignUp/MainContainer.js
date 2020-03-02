import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import GenderSelectContainer from './GenderSelectContainer'
import BirthdayInputContainer from './BirthdayInputContainer'
import AddressInputContainer from './AddressInputContainer'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <div className='contents'>
          <div className='contents-title-area'>
            <h3 className='contents-title'>基本情報</h3>
          </div>
            {/* -------------gender-select-area------------- */}
            <GenderSelectContainer />
            {/* -------------birthday-input-area------------- */}
            <BirthdayInputContainer />
            {/* -------------address-input-area------------- */}
            <AddressInputContainer />
      </div>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="primary" size="large">会員登録する</Button>
      </CardActions>
    </Card>
  );
}