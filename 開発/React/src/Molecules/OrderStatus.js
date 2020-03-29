import React from 'react'
import styled from 'styled-components'
import OrderInfo from './OrderInfo'
import description from '../Atoms/input/description'

export default function OrderStatus() {
  // ToDo オーダーTBLやユーザーTBLからデータを持ってくる
  const OrderLists = [
    {
      orderId:         '注文 #001',
      status:     '失敗',
      timestamp:  '2020/03/26 21:00:00',
      customer:   '◎ しろくま',
      tel:        '090-1111-2222'
    },
    {
      orderId:         '注文 #002',
      status:     '支払い確定済',
      timestamp:  '2020/03/26 21:00:00',
      customer:   '◎ ぺんぎん',
      tel:        '090-1111-2222'
    },
    {
      orderId:         '注文 #003',
      status:     '入荷待ち',
      timestamp:  '2020/03/26 21:00:00',
      customer:   '◎ ねこ',
      tel:        '090-1111-2222'
    },
    {
      orderId:         '注文 #004',
      status:     '注文受付け',
      timestamp:  '2020/03/26 21:00:00',
      customer:   '◎ とかげ',
      tel:        '090-1111-2222'
    },
    {
      orderId:         '注文 #005',
      status:     '配送済み',
      timestamp:  '2020/03/26 21:00:00',
      customer:   '◎ とんかつ',
      tel:        '090-1111-2222'
    }
  ];

  return (
    <Container>
      {/* ⑧ソート機能部分 */}
      <OrderInfoTitle description={['ID', 'ステータス', '日時', 'お客様', 'TEL']}/>
      {OrderLists.map((Order, index) => {
        return (
          <OrderInfo
            key = {index}
            orderId = {Order.orderId}
            status = {Order.status}
            timestamp = {Order.timestamp}
            customer = {Order.customer}
            tel = {Order.tel}
          />
        )
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 900px;
  padding: 30px 0;
`

const OrderInfoTitle = styled(description)`
  width: 900px;
  font-weight: bold;
  font-size: 18px;
  display: inline;
  padding: 0 60px;
`