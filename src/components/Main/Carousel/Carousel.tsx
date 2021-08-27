// 이 코드는 캐러셀이며, Bootstrap 에서 가져온 내용을 변형해서 사용

import "./Carousel.css";

interface PropTypes {
  changeIndex: (mode: string) => void;
  menuImageLinks: string[];
}
export default function Carousel({ changeIndex, menuImageLinks }: PropTypes) {
  return (
    <>
      {/* 왼쪽버튼 */}
      <button
        // carousel-dark 지정 시 옆으로 넘어가는 버튼이 까만색으로 나옴
        className="carousel-control-prev carousel-dark"
        type="button"
        // 해당 버튼이 작동될 타겟아이디
        data-bs-target="#lunchboxCarousel"
        data-bs-slide="prev"
        onClick={() => changeIndex("prev")}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      {/* 오른쪽 버튼 */}
      <button
        className="carousel-control-next carousel-dark"
        type="button"
        data-bs-target="#lunchboxCarousel"
        data-bs-slide="next"
        onClick={() => changeIndex("next")}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div
        id="lunchboxCarousel"
        className="carousel slide"
        // interval은 사진이 자동으로 넘어가는 시간을 의미
        // false 로 하면 자동으로 안 넘어감
        data-bs-interval="false"
        data-bs-ride="carousel"
      >
        {/* 우리 프로그램이 딱 세 날짜의 메뉴만 제공해서 3개로 고정해 썼지만,
        가능하다면 이 구문을 반복문을 이용해 갯수가 몇개든 작동하도록 
        바꾸려고 애써볼 것! */}
        <div className="carousel-inner">
          {/* 적어도 하나엔 active 를 붙여줘야 캐러셀 작동함 */}
          <div className="carousel-item active">
            <img
              // "/images/menu/---.jpg"
              // 데이터베이스 menu 테이블에 컬럼 추가해서 입력함
              src={menuImageLinks[1]}
              className="d-block w-100"
              height="200"
              width="200"
              alt="내일"
            />
          </div>
          <div className="carousel-item">
            <img
              src={menuImageLinks[2]}
              className="d-block w-100"
              height="200"
              width="200"
              alt="모레"
            />
          </div>
          <div className="carousel-item">
            <img
              src={menuImageLinks[0]}
              className="d-block w-100"
              height="200"
              width="200"
              alt="3일 뒤"
            />
          </div>
        </div>
      </div>
    </>
  );
}
