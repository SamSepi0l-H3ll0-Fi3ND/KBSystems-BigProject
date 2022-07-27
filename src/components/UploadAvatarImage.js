import React from "react";
const UploadAvatarImage = ({}) => {
  return (
    <div>
      <label for="my-modal-4" class="btn modal-button">
        Change your avatar!
      </label>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch"></img>
          </figure>
          <div class="card-body max-w-xs">
            <h2 class="card-title">Look at yourself fresh!</h2>
            <p>Click the button to upload your new avatar photo.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Upload</button>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};
export default UploadAvatarImage;
