import React, { useState, useContext } from "react";

import API from "../../env";
import UserContext from "../../UserContext";
import TagInput from "../../ui/TagInput";
import Avatar from "./Avatar";
import Album from "./Album";

const EditUserInfo = () => {
  const ctx = useContext(UserContext);

  const { description: userDesc, tags: userTags } = ctx.userData.user;

  const [description, setDescription] = useState(userDesc);
  const [tags, setTags] = useState(
    userTags.length === 0 ? ["", "", "", ""] : userTags
  );
  const [photo, setPhoto] = useState();
  const [photos, setPhotos] = useState([]);
  let a;
  try {
    console.log(photos[0].file, photos[0].id);
    console.log(photos[1].file, photos[1].id);
  } catch (e) {}
  const onSubmitHandler = async () => {
    try {
      const resp = await fetch(`${API}/api/user/edit`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${ctx.userData.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          description,
          tags: tags,
        }),
      });

      const data = await resp.json();

      const userData = { ...ctx.userData };
      userData.user.tags = data.tags;
      userData.user.description = data.description;

      ctx.setUserData(userData);

      // setDescription("");

      //WYsyłanie zdjęcia

      if (photo) {
        const form = await new FormData();
        await form.append("avatar", photo);
        await fetch(`${API}/api/photos/upload`, {
          method: "post",
          headers: {
            "Context-type": "multipart/form-data",
            Accept: "application/json",
            Authorization: "Bearer 12|bPeswddM0gJhKDleakygQG2Y0FEVdJ1O1HFWSblX",
          },
          body: form,
        }).then((data) => data.json());
      }

      if (photos) {
        const form = await new FormData();
        photos.forEach((photo) => {
          form.append("avatar", photo);
        });

        await fetch(`${API}/api/photos/upload`, {
          method: "post",
          headers: {
            "Context-type": "multipart/form-data",
            Accept: "application/json",
            Authorization: "Bearer 12|bPeswddM0gJhKDleakygQG2Y0FEVdJ1O1HFWSblX",
          },
          body: form,
        }).then((data) => data.json());
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="card cardDesign shadow-lg">
      <div className="card-body bg-base-300 flex flex-col items-center">
        <h2 className="card-title ">Edit your profile!</h2>
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
          <label className="label">
            <span className="label-text">Tags</span>
          </label>
          <div>
            {tags.map((tag, index) => (
              <TagInput
                id={index}
                key={index}
                tagValue={tag}
                tags={tags}
                setTags={setTags}
              />
            ))}
          </div>
        </div>
        <div className=""> </div>
        {/*<div className="form-control w-full max-w-xs flex items-center">*/}
        {/*  <label className="label">*/}
        {/*    <span className="label-text">Avatar</span>*/}
        {/*  </label>*/}
        {/*  <div className="indicator w-52 lg:w-max">*/}
        {/*    <span className="indicator-item indicator-center indicator-middle badge badge-primary">*/}
        {/*      Upload avatar +*/}
        {/*    </span>*/}
        {/*    <img*/}
        {/*      className="aspect-auto "*/}
        {/*      src="https://placeimg.com/300/150/arch"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="flex justify-between w-full">
          <Avatar photo={photo} setPhoto={setPhoto} />
          {console.log(photos)}
          <Album a={a} photos={[...photos]} setPhotos={setPhotos} />
        </div>
        <div className="chuj"></div>
        <div className="card-actions  justify-center items-center">
          <button className="btn btn-primary mt-4" onClick={onSubmitHandler}>
            Confirm changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserInfo;
