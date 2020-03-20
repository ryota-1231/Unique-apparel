import React from 'react'
import styled from 'styled-components'
import OtherItem from '../itemDetail/image'

export default function OtherListingItem() {
  const ImageLists = [
    {
      name: 'すみっこ1',
      price: '¥1,000',
      image: '/static/images/購入商品画像1.png'
    },
    {
      name: 'すみっこ2',
      price: '¥1,500',
      image: '/static/images/購入商品画像2.png'
    },
    {
      name: 'すみっこ3',
      price: '¥1,500',
      image: '/static/images/購入商品画像3.png'
    },
    {
      name: 'すみっこ4',
      price: '¥1,500',
      image: '/static/images/購入商品画像4.png'
    }
  ];

  return (
    <Container>
      <A href='#'>スージーさんのその他の出品</A>
      <ItemsSection>
        {ImageLists.map((Item, index) => {
          return (
            <OtherItem
              key = {index}
              name = {Item.name}
              price = {Item.price}
              image = {Item.image}
            />
          )
        })}
      </ItemsSection>
    </Container>
  );
}

const Container = styled.div`
`

const ItemsSection = styled.section`
  width: 900px;
  display: flex;
`

const A = styled.a`
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  color: skyblue;
  &:hover {
    cursor: pointer;
    opacity: 50%;
  }
`