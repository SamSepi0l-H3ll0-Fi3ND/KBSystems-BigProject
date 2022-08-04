import React, { useContext } from "react";
import UserContext from "../../UserContext";
import API from "../../env";
import Tag from "../../ui/Tag";

import Switcher from "../SwitcherButton";

const FriendCard = () => {
    const ctx = useContext(UserContext);
    const { token } = ctx.userData;
    const { avatar_url, name, username, description,tags } = ctx.userData.user;

  return (
    <div class="card w-96 h-3/5 bg-base-300 shadow-xl">
      <div class=" flex justify-center avatar mt-4">
        <div class="fle justify-center w-24 rounded-full">
          <img src={`${API}${avatar_url}`} alt="User Avatar" />
        </div>
      </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name} </h2>
        <p>{description ? description : "Description"}</p>
        <div className="flex justify-center w-full ">
          {tags
            ? tags.map((tag, index) => <Tag name={tag} key={index} />)
            : null}
        </div>
        <div class="flex justify-center card-actions">
          <button class="btn btn-primary">Follow</button>
          <button class="btn btn-primary">Message</button>
        </div>
      </div>
    </div>
  );
};
export default FriendCard;
