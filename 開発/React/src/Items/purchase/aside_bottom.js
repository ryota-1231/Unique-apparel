import React from 'react';
import Button from '@material-ui/core/Button'
import Items from './items.js';

export default function PurchaseItemInformation() {
  return (
    <aside className="aside_bottom">
      <h2>お届けの商品</h2>

      <section className="section_top">
        <h3>お届け日</h3>
        <div>
          <p>指定無し:2月25日~2月27日発送予定</p>
          <p>日時指定:午前中</p>
          <p>即日配送:最短2月24日(月)午前中</p>
        </div>
        <div>
          <p>¥ 0</p>
          <p>¥ 0</p>
          <p>¥ 350</p>
        </div>
        <div className="button_area">
          <Button variant="outlined" color="primary">変更</Button>
        </div>
      </section>

      <section className="section_image">
        <h3>商品</h3>
        <Items />
        <div className="button_area">
          <Button variant="outlined" color="primary">変更</Button>
        </div>
      </section>

      <section className="section_bottom">
        <h3>送料</h3>
        <p className="payment_amount">¥ 210</p>
      </section>
    </aside>
  );
}