import React from 'react';
import Button from '@material-ui/core/Button'

export default function PurchaseConfirmation() {
  return (
    <aside className="aside_top">
      <h1>注文内容の確認</h1>

      <section className="section_top">
        <h3>お届け先</h3>
        <div>
          <p>チームぱぱ様</p>
          <p>住所:〒1510001 東京都渋谷区千駄ヶ谷123-4 コーポ原宿3F</p>
          <p>電話:03-1234-5678</p>
        </div>
        <div className="button_area">
          <Button variant="outlined" color="primary">変更</Button>
        </div>
      </section>

      <section className="section_middle">
        <h3>支払い方法</h3>
        <p className="payment_type">クレジットカード</p>
        <p className="payment_amount">¥ 0</p>
        <div className="button_area">
          <Button variant="outlined" color="primary">変更</Button>
        </div>
      </section>

      <section className="section_bottom">
        <p className="payment_type">クーポン</p>
        <p className="payment_amount">ご利用可能クーポン:5%オフ</p>
        <div className="button_area">
          <Button variant="outlined">✓</Button>
        </div>
      </section>
    </aside>
  );
}