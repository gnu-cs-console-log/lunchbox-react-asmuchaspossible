import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

interface PropTypes {
  userId: string;
  passwd: string;
  runLogin: boolean;
  setRunLogin: (flag: boolean) => void;
  setFailedAlarm: (flag: boolean) => void;
  goMain: () => void;
}

const GET_USER_INFO = gql`
  query personByUserId($userId: String!) {
    personByUserId(userId: $userId) {
      password
    }
  }
`;
export default function RunLogin({
  userId,
  passwd,
  runLogin,
  goMain,
  setRunLogin,
  setFailedAlarm,
}: PropTypes) {
  const { data, loading } = useQuery(GET_USER_INFO, {
    variables: { userId },
  });
  useEffect(() => {
    if (!loading) {
      if (data.personByUserId === null) {
        setFailedAlarm(true);
        setRunLogin(false);
      } else if (passwd !== data.personByUserId.password) {
        setFailedAlarm(true);
        setRunLogin(false);
      } else {
        goMain();
      }
    }
  });
  return <></>;
}
