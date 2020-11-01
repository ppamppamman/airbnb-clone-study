import React from 'react';
import styled from 'styled-components';

import * as style from '../mixin/style';
import HeaderNavSearchBar from './HeaderNavSearchBar';
import HeaderNavTab from './HeaderNavTab';

const HeaderNavLayout = styled.header`
  width:100vw;
  color:white;
  ${ style.marginContainer }
  /* background: white; */
  
  display:flex;
  flex-direction: row;
  justify-content:space-between;
` 

const LogoBlock = styled.div`
  display:block;
`
const CenterBlock = styled.div`
  display:block;
`
const RightBlock = styled.div`
  display:block;
`
const UpperItem = styled.div`
  display:block;
`
const LowerItem = styled.div`
  width:100%;
  
  position:absolute;
  top:10vh;
  left:0;

  display:block;
`

const HeaderNav = (props) => {
  const {onClickTabItem, onClickSearchBarItem, activeTabItem} = props;

  return (
    <HeaderNavLayout>
      <LogoBlock> 
        <h3>로고</h3> 
      </LogoBlock>
      <CenterBlock>
        <UpperItem>
          <br />
        </UpperItem>
        <LowerItem>
          <HeaderNavTab onClickTabItem={onClickTabItem} activeTabItem={activeTabItem}/>
          <HeaderNavSearchBar onClickSearchBarItem={onClickSearchBarItem} activeTabItem={activeTabItem}/>
        </LowerItem>
      </CenterBlock>
      <RightBlock>
        <button>호스트 되기</button>
        <button>드롭다운</button>
        <button>프로필</button>
      </RightBlock>
    </HeaderNavLayout>
  );
}

export default HeaderNav;
