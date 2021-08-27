import { useState } from "react";
import "./Main.css";
import Content from "../components/Main/Content";
import Header from "../components/Main/Header";
import OrderCanceled from "../components/Main/OrderCanceled";
import OrderComplete from "../components/Main/OrderComplete";
import Footer from "../components/Footer";

// 실제 쓰일 코드
// interface PropTypes {
//   location: {
//     state: {
//       idFromLogin: any;
//     };
//   };
// }

// export default function Main({
//   location: {
//     state: { idFromLogin },
//   },
// }: PropTypes) {
//   return (
//     <>
//       <div>{idFromLogin}</div>
//     </>
//   );
// }

export default function Main() {
  // 아래 변수는 코딩 완료 후 해제하고 테스트할 것.
  const idFromLogin = "assistant0603";
  // setState는 사용하지 않고, state만 사용할 경우 다음과 같이 [0] 쓴다.
  // 물론 setState는 사용할 것이지만, 다음 작업시까지 warning 방지.
  // 이 컴포넌트엔 총 세가지 화면을 담을 것임
  // Main, OrderComplete(주문완료안내화면), OrderCanceled(주문취소완료안내화면)
  // 물론 redirect 를 사용한다면 컴포넌트가 아닌 라우트로 승격할 수 있다.
  const mainShow = useState(true)[0];
  const orderCompleteShow = useState(false)[0];
  const orderCanceledShow = useState(false)[0];
  return (
    <>
      {/* 일단은 Main 컴포넌트 보여줌 */}
      {mainShow && (
        <div className="main fullsize">
          {/* idFromLogin을 넘겨주는 이유는,
          Header 에서 내 주문 확인화면인 MyOrder 라우트로
          넘어가는 링크가 있기 때문. */}
          <Header idFromLogin={idFromLogin} />
          {/* idFromLogin을 넘겨주는 이유는,
          Content 에서 주문하기 화면인 Order 라우트로
          넘어가는 링크가 있기 때문. */}
          <Content idFromLogin={idFromLogin} />
          <Footer />
        </div>
      )}
      {/* 주문완료안내화면 */}
      {orderCompleteShow && <OrderComplete />}
      {/* 주문취소완료안내화면 */}
      {orderCanceledShow && <OrderCanceled />}
    </>
  );
}
