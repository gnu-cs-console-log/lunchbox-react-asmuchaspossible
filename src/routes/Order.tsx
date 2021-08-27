// import Footer from "../components/Footer";

// 실제 쓰일 코드
interface PropTypes {
  location: {
    state: {
      index: any;
      idFromLogin: string;
    };
  };
}

export default function Order({
  location: {
    state: { index, idFromLogin },
  },
}: PropTypes) {
  return (
    <>
      <h1>Order</h1>
      <div>index: {index}</div>
      <div>idFromLogin: {idFromLogin}</div>
    </>
  );
}
// export default function Order() {
//   // 아래 변수는 코딩 완료 후 해제하고 테스트 할 것
//   const index = 0;
//   const idFromLogin = "assistant0603";
//   return (
//     <>
//       <h1>Order</h1>
//     </>
//   );
// }
