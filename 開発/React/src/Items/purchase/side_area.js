import React from 'react';
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';

export default function PurchaseFixing() {
  return (
    <aside>
      <Button variant="contained" color="primary" disableElevation className="purchase_button">
        購入確定する
      </Button>
      <section className="total_area">
        <section>
          <p>商品代</p>
          <p>クーポン</p>
          <p>送料</p>
          <p>支払い手数料</p>
          <p className="total">合計(税込み)</p>
          <Link href="#">返品について</Link>
        </section>
        <section>
          <p className="each_price">¥ 4500</p>
          <p className="each_price">¥ 0</p>
          <p className="each_price">¥ 210</p>
          <p className="each_price">¥ 0</p>
          <p className="total_price">¥ 4710</p>
        </section>
      </section>
    </aside>
  );
}