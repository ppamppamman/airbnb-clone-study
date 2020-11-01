import React, {useEffect, useCallback} from 'react';
import styled from 'styled-components';

const TabLayout = styled.div`
  height:5vh;
  margin: 1rem;

  display:flex;
  justify-content:center;

  .active {
    border-bottom: 0.3rem solid white;
  }
`
const TabItem = styled.span`
  padding:0.5rem;
  font-size:1.2rem;
  cursor:pointer;

  &active {
    border-bottom: 0.3rem solid white;
  }
`

const HeaderNavTab = (props) => {
  const { onClickTabItem, activeTabItem } = props;
  const tabsRef = React.createRef();

  const handleClickTabItem = useCallback((e) => {
    
    [...tabsRef.current.children].forEach(
      tabItem => tabItem.classList.contains("active") ? tabItem.classList.remove("active") : ""
    )
    e.target.classList.add("active");
    console.log(e.target.classList);
    onClickTabItem(e.target.innerText);
    
  });

  return (
    <TabLayout ref={tabsRef}>
      <TabItem onClick={handleClickTabItem} className={"active"}>숙소</TabItem>
      <TabItem onClick={handleClickTabItem}>체험</TabItem>
      <TabItem onClick={handleClickTabItem}>온라인 체험</TabItem>
    </TabLayout>
  );
}

export default HeaderNavTab;
