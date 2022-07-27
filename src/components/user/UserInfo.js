import Switcher from "../SwitcherButton";
import React, { useContext, useState } from "react";
import UserContext from "../../UserContext";
import API from "../../env";

import { Link } from "react-router-dom";

const UserInfo = () => {
  const ctx = useContext(UserContext);
  const [theme, setTheme] = useState("");
  const { avatar_url, name, username, token } = ctx.userData.user;

  return (
    <div className="flex items-center space-x-3 bg-base-300 p-4 rounded-box w-full shadow-lg">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={`${API}${avatar_url}`} alt="User Avatar" />
        </div>
      </div>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm opacity-50">{username}</div>
      </div>
      <div class="dropdown dropdown-top dropdown-end">
        <label tabindex="0" class="btn btn-ghost m-1">
          . . .
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>
              <Switcher data-theme={theme} themeeee={setTheme} /> Dark Mode
            </a>
          </li>
          <li>
            {!token && (
              <Link to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="33"
                  height="22"
                  fill="white"
                >
                  <path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z" />
                </svg>
                <button>Log out</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
