import React, { useContext } from "react";

import UserInfoBig from "./UserInfoBig";
import EditUserInfo from "./EditUserInfo";
import UserContext from "../../UserContext";

import loginImg from "../../assets/imgs/userLogin.svg";

const UserCard = () => {
  const ctx = useContext(UserContext);

  const { token } = ctx.userData;

  let classes = token
    ? "overflow-y-scroll scrollbar-hide"
    : "overflow-y-scroll scrollbar-hide flex items-center";

  let data;
  if (!token) {
    data = (
      <div className="w-1/2 space-y-4 mx-auto">
        <h1 className="text-2xl">U had to login first!</h1>
        <img src={loginImg} alt="" />
      </div>
    );
  } else {
    data = (
      <div className="space-y-4">
        <UserInfoBig />
        <EditUserInfo />
      </div>
    );
  }

  return <div className={classes}>{data}</div>;
};
export default UserCard;
