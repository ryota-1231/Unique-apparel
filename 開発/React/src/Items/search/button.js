import React from 'react';
import Button from '@material-ui/core/Button';

export default function Buttons() {
  return (
    <div className="search-buttons">
      <Button variant="contained">クリア</Button>
      <Button variant="contained" color="secondary">検索</Button>
    </div>
  );
}
