import React, { useContext } from "react";
import UserContext from "../../UserContext";
import API from "../../env";
import Tag from "../../ui/Tag";

const FriendList = () => {
  const ctx = useContext(UserContext);
  const { token } = ctx.userData;
  const { avatar_url, name, username, tags } = ctx.userData.user;

  return (
    <div className="flex items-center justify-around bg-base-300  mt-4 p-2 rounded-box shadow-lg">
      <div className="flex avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={`${API}${avatar_url}`} alt="User Avatar" />
        </div>
      </div>
      <div className="font-bold">{name}</div>
      <div className="flex">
        {tags ? tags.map((tag, index) => <Tag name={tag} key={index} />) : null}
      </div>
      <div className="btn-group ">
        <button class="btn btn-outline btn-primary btn-sm">Send Message</button>
        <div class="dropdown dropdown-top dropdown-end">
          <button class="btn btn-outline btn-primary btn-sm btn-active ">
            ...
          </button>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-outline btn-primary btn-sm ">
                Follow
              </button>
            </li>
            <li>
              <button className="btn btn-outline btn-primary btn-sm ">
                Block
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FriendList;
