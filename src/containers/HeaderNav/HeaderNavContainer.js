import React, {useState, useCallback} from 'react';
import HeaderNav from '../../components/nav/HeaderNav';

const HeaderNavContainer = () => {
  const [activeTabItem, setActiveTabItem] = useState("숙소");

  const onClickTabItem = useCallback((val) => {
    console.log(val);
    switch(val){
      case "숙소":
        setActiveTabItem(val);
        break;
      case "체험":
        setActiveTabItem(val);
        break;
      case "온라인 체험":
        setActiveTabItem(val);
        // window.location.href = "/온라인체험"
        break;
    }
  });

  const onClickSearchItem = useCallback((obj) => {
    console.log(obj)
  })

  return (
    <>
      <HeaderNav activeTabItem={activeTabItem} onClickTabItem={onClickTabItem} onClickSearchItem={onClickSearchItem}/>
    </>
  );
}

export default HeaderNavContainer;
