import React, {useEffect} from 'react';
import styled from 'styled-components';
import * as style from '../mixin/style';

const SearchBarLayout = styled.div`
  height:5vh;
  background-color:white;
  color:black;
  ${ style.marginContainer }

  display:flex;
  justify-content: space-around;
  
`

const SearchBarItem = styled.div`
  cursor:pointer;
  padding-left:2rem;
  padding-right:2rem;
  /* display:block; */
  display:flex;
  justify-content:center;
  align-items:center;
  
`

const HeaderNavSearchBar = (props) => {
  const { activeTabItem } = props;

  useEffect(() => {
    if(activeTabItem === "체험"){
      [...document.querySelectorAll("#stay")].forEach(
        item => item.style.display = "none"
      );
      [...document.querySelectorAll("#experience")].forEach(
        item => item.style.display = "block"
      );
    } else {
      [...document.querySelectorAll("#stay")].forEach(
        item => item.style.display = "block"
      );
      [...document.querySelectorAll("#experience")].forEach(
        item => item.style.display = "none"
      );
    }
  }, [activeTabItem])

  
  return (
    <SearchBarLayout>
      <SearchBarItem>
        <div>위치 <br/> <input placeholder="어디로 여행가세요?" /> </div>
      </SearchBarItem>
      <SearchBarItem id={"stay"}>
        <div> 체크인 <br/> 날짜 추가</div>
      </SearchBarItem>
      <SearchBarItem id={"stay"}>
        <div> 체크아웃 <br/> 날짜 추가</div>
      </SearchBarItem>
      <SearchBarItem id={"stay"}>
        <div> 인원 <br/> 게스트 추가</div>
      </SearchBarItem>
      <SearchBarItem id={"experience"}>
        <div> 날짜 <br/> 원하는 날짜를 입력하세요</div>
      </SearchBarItem>
    </SearchBarLayout>
  );
}

export default HeaderNavSearchBar;
