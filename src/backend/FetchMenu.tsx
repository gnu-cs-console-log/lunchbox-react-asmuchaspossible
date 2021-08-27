import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
interface PropTypes {
  setMenuDays: (menuDays: string[]) => void;
  setMenuNames: (menuNames: string[]) => void;
  setDescriptions: (menuDescriptions: string[]) => void;
  setMenuImageLinks: (menuImageLinks: string[]) => void;
  setLoading: (flag: boolean) => void;
  setRunFetchMenu: (flag: boolean) => void;
}

// 서버에 요청해 모든 메뉴 데이터를 가져오는 쿼리
// menuImageLink의 경우, 원래 ERD에는 없었으나 추가됨.
const GET_MENUS = gql`
  query allMenus {
    allMenus {
      edges {
        node {
          menuDay
          menuName
          description
          menuImageLink
        }
      }
    }
  }
`;
export default function FetchMenu({
  setMenuDays,
  setMenuNames,
  setDescriptions,
  setMenuImageLinks,
  setLoading,
  setRunFetchMenu,
}: PropTypes) {
  const { data, loading } = useQuery(GET_MENUS);
  useEffect(() => {
    if (!loading) {
      const edges = data.allMenus.edges;
      // ["내일","모레","3일 뒤"]
      setMenuDays(edges.map((edge: any) => edge.node.menuDay)); 
      // ["내일메뉴이름","모레메뉴이름","3일뒤메뉴이름"]
      setMenuNames(edges.map((edge: any) => edge.node.menuName)); 
      // ["내일메뉴설명","모레메뉴설명","3일뒤메뉴설명"]
      setDescriptions(edges.map((edge: any) => edge.node.description));
      // ["내일메뉴이미지링크","모레메뉴이미지링크","3일뒤메뉴이미지링크"]
      // "/images/menu/---.jpg"
      setMenuImageLinks(edges.map((edge: any) => edge.node.menuImageLink));
      // 데이터 패치가 끝났으니 로딩화면 종료
      setLoading(false);
      // 현재 컴포넌트인 FetchMenu 종료
      setRunFetchMenu(false);
    }
  });
  return <></>;
}
