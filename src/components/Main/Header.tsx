import { Link } from "react-router-dom";
import "./Header.css";

interface PropTypes {
  idFromLogin: string;
}
export default function Header({ idFromLogin }: PropTypes) {
  return (
    <>
      <div className="header">
        <Link
          to={{
            pathname: "/myorder",
            state: { idFromLogin: idFromLogin },
          }}
        >
          <span className="myButton">My</span>
        </Link>
      </div>
    </>
  );
}
