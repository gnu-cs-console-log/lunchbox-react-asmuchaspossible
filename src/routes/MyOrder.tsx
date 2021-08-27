// import Footer from "../components/Footer";

// 실제 쓰일 코드
interface PropTypes {
  location: {
    state: {
      idFromLogin: any;
    };
  };
}

export default function MyOrder({
  location: {
    state: { idFromLogin },
  },
}: PropTypes) {
  return (
    <>
      <h1>MyOrder</h1>
      <div>{idFromLogin}</div>
    </>
  );
}
// export default function MyOrder() {
//   // 아래 변수는 코딩 완료 후 해제하고 테스트 할 것
//   const idFromLogin = "assistant0603";
//   return (
//     <>
//       <h1>MyOrder</h1>
//     </>
//   );
// }
