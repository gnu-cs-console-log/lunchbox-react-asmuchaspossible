import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import FetchMenu from "../../backend/FetchMenu";
import "./Content.css";

interface PropTypes {
  idFromLogin: string
}

export default function Content({idFromLogin}: PropTypes) {
  // 로딩화면 플래그
  // 데이터 패치가 완료될때까진 true
  const [loading, setLoading] = useState(true);
  // 맨 처음 Main 화면으로 접속하면 서버로부터 데이터를 가져와야
  // 데이터를 가져오고나면 이 컴포넌트 플래그는 false로 바뀌며 즉시 종료됨
  const [runFetchMenu, setRunFetchMenu] = useState(true);
  // 메뉴날짜, 메뉴이름, 메뉴설명, 메뉴이미지링크 초기화
  // menuImageLink 는 ERD에 포함하지 않았으나, 개발과정에서 필요하다 생각되어 추가함
  const [menuDays, setMenuDays] = useState(["", "", ""]);
  const [menuNames, setMenuNames] = useState(["", "", ""]);
  const [descriptions, setDescriptions] = useState(["", "", ""]);
  const [menuImageLinks, setMenuImageLinks] = useState(["", "", ""]);
  // 사용자에게 보이는 메뉴는 인덱스가 변할때마다 바뀐다
  // 왜 0이 아니라 1부터 시작하냐면, 테이블에 PK를 이름자체로 지정해주었기 때문에
  // 3일 후가 맨 첫번째 인덱스이고, 1은 내일 메뉴를 의미하므로 1로 지정
  // 해당 인덱스는 사용자가 버튼을 누를때마다 바뀜
  // 그러나! 그림이 전환되기도 전에 버튼을 재빠르게 누르면 인덱스만 먼저 올라가는 버그 있음
  // 이 버그는 해결책을 스스로 찾아볼 것!
  const [index, setIndex] = useState(1);
  // 버튼을 누르면 실행되는 함수
  // 작동은 자식컴포넌트인 Carousel 컴포넌트에서 이루어짐
  const changeIndex = (mode: string) => {
    if (mode === "prev") {
      if (index !== 0) {
        setIndex(index - 1);
      } else {
        setIndex(2);
      }
    } else {
      if (index !== 2) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }
  };
  return (
    <div className="mainContent">
      {runFetchMenu && (
        // 데이터를 가져오는 용도로만 쓰이는 컴포넌트
        // 데이터 패치가 완료되면 자동으로 꺼짐
        <FetchMenu
          setMenuDays={setMenuDays}
          setMenuNames={setMenuNames}
          setDescriptions={setDescriptions}
          setMenuImageLinks={setMenuImageLinks}
          setRunFetchMenu={setRunFetchMenu}
          setLoading={setLoading}
        />
      )}
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1 className="whatDate">{menuDays[index]} 점심메뉴</h1>
          {/* 캐러셀은 회전목마라는 뜻이며, 이미지 옆에 버튼을 클릭하면
          회전목마 돌듯이 이미지가 회전하는 기능을 가진 Bootstrap 컴포넌트이다. 
          물론, Bootstrap에서 컴포넌트는 React 의 컴포넌트와는 다른것을 의미한다. */}
          <Carousel changeIndex={changeIndex} menuImageLinks={menuImageLinks} />
          <div className="menuName">{menuNames[index]}</div>
          <div className="menuExplain">{descriptions[index]}</div>
          {/* 주문하기버튼 */}
          <Link
            className="orderBtnMainLink"
            to={{
              pathname: "/order",
              state: {
                index: index,
                idFromLogin: idFromLogin
              },
            }}
          >
            <div className="buttonContainer d-grid gap-2">
              <button type="button" className="orderBtnMain btn btn-info">
                주문하기
              </button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
