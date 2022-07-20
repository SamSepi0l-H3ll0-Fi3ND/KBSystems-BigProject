const EditProfile = ({}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tags</span>
          </label>
          <div>
            <div class="badge badge-outline mt-2">
              {" "}
              <input
                type="text"
                placeholder="Change first tag here"
                className=" text-gray-100 badge-outline"
              />
            </div>
            <div class="badge badge-outline mt-4">
              {" "}
              <input
                type="text"
                placeholder="Change second tag here"
                className=" text-gray-100  badge-outline"
              />
            </div>
            <div class="badge  badge-outline mt-4">
              {" "}
              <input
                type="text"
                placeholder="Change third tag here"
                class=" text-gray-100 badge-outline"
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
          <div class="indicator">
            <span class="indicator-item indicator-center indicator-middle badge badge-primary">
              Upload avatar +
            </span>
            <img src="https://placeimg.com/300/150/arch" />
          </div>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary  mt-4">Confirm changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
