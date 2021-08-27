import "./Loading.css";
export default function Loading() {
  return (
    <>
      <div className="fullsize loading">
        <div className="firstLoadingTitle">
          <h1>설레는 점심시간</h1>
        </div>
        <div className="lunchboxIconContainer">
          <img src="/images/lunchbox-logo.png" alt="런치박스아이콘" height="250" />
        </div>
        <h1>조교도시락</h1>
      </div>
    </>
  );
}
