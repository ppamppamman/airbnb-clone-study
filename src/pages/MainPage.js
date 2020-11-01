import React from 'react';
import HeaderNav from '../containers/HeaderNav';
import styled from 'styled-components';

const BackgroundPosition = styled.div`
  position: absolute;
  top:0;
  left:0;
  z-index:-1;
  width:100vw;
  height:100vh;
  background-image:url("https://a0.muscache.com/im/pictures/de34af12-d42b-4857-9ec4-65d240db6fc2.jpg?im_q=highq&im_w=2560");
  background-size:cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`

const MainPage = () => {
  return (
    <>
      <HeaderNav />
      <BackgroundPosition>
        
      </BackgroundPosition>
      <h1>메인페이지</h1>
    </>
  );
}

export default MainPage;
