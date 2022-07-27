import UploadAvatarImage from "../UploadAvatarImage";
import React, { useState, useContext } from "react";

import API from "../../env";
import UserContext from "../../UserContext";

const EditUserInfo = () => {
  const ctx = useContext(UserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [tag4, setTag4] = useState("");

  const onSubmitHandler = async () => {
    try {
      const resp = await fetch(`${API}/api/user/description/set`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${ctx.userData.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          description,
        }),
      });

      const data = await resp.json();

      ctx.setUserData({ ...ctx.userData, user: data });

      setDescription("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="card w-96 bg-base-300 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">Edit your profile!</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Change name here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Change description here"
            className="input input-bordered"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tags</span>
          </label>
          <div>
            <div className="badge badge-outline mt-2">
              {" "}
              <input
                type="text"
                placeholder="Change first tag here"
                className=" text-gray-100 badge-outline"
              />
            </div>
            <div className="badge badge-outline mt-4">
              {" "}
              <input
                type="text"
                placeholder="Change second tag here"
                className=" text-gray-100  badge-outline"
              />
            </div>
            <div className="badge  badge-outline mt-4">
              {" "}
              <input
                type="text"
                placeholder="Change third tag here"
                className=" text-gray-100 badge-outline"
              />
            </div>
            <div className="badge  badge-outline mt-4">
              {" "}
              <input
                type="text"
                placeholder="Change fourth tag here"
                className=" text-gray-100 badge-outline"
              />
            </div>
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Avatar</span>
          </label>
          <div className="indicator">
            <img src="https://placeimg.com/300/150/arch" />
          </div>
          <UploadAvatarImage />
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary mt-8" onClick={onSubmitHandler}>
            Confirm changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserInfo;
