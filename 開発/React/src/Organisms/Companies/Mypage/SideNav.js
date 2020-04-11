import React from 'react'
import styled from 'styled-components'
import H3 from '../../../Atoms/heading/h3'
import P from '../../../Atoms/input/description'

class SideNav extends React.Component {
  render () {
    return (
      <SideContainer>
        {/* ⑨企業登録情報遷移リンク */}
        <Wrapper>
          <SideNavH3 title='企業登録情報' />
          <P description={['企業登録情報', '項目①', '項目②']} />
        </Wrapper>
        {/* ⑩出品履歴遷移リンク */}
        <Wrapper>
          <SideNavH3 title='出品履歴' />
          <P description={['発送済の商品', '発送前商品', '問合せ商品']} />
        </Wrapper>
        {/* ⑪データ分析遷移リンク */}
        <Wrapper>
          <SideNavH3 title='データ分析' />
          <P description={['いいね', 'クリック数']} />
        </Wrapper>
        {/* ⑫退会遷移リンク */}
        <Wrapper>
          <SideNavH3 title='退会' />
          <P description={['退会手続き']} />
        </Wrapper>
      </SideContainer>
    )
  }
}

const SideContainer = styled.div`
  width: 150px;
  height: auto;
`

const Wrapper = styled.div`
  border-bottom: 1px solid #c0c0c0;
  padding 15px 0 10px 0;
`

const SideNavH3 = styled(H3)`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.2em;
  padding-bottom: 10px;
`

export default SideNav
