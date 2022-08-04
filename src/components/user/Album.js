import { useEffect, useState } from "react";

const Album = ({ photos, setPhotos, a }) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    document.querySelectorAll(".drop-zone__inputa").forEach((inputElement) => {
      const dropZoneElement = inputElement.closest(".drop-zonea");

      dropZoneElement.addEventListener("click", () => {
        inputElement.click();
      });

      inputElement.addEventListener("change", () => {
        if (inputElement.files.length) {
          updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
      });

      dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--overa");
      });

      ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, () => {
          dropZoneElement.classList.remove("drop-zone--overa");
        });
      });

      dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
          inputElement.files = e.dataTransfer.files;
          updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--overa");
      });
    });
  }, []);

  function updateThumbnail(dropZoneElement, file) {
    const copyPhotos = [...photos];
    copyPhotos.push({ file: file, id: id });
    console.log(copyPhotos);
    setId(id + 1);
    setPhotos(copyPhotos);
    a = file;
    const image = photos.map((x) => (
      <img
        className={"album max-w-xs "}
        key={x.id}
        src={`${URL.createObjectURL(x.file)}`}
        alt={"aaa"}
      />
    ));
  }

  return (
    <>
      <div className="drop-zonea">
        <span className="drop-zone__prompta">
          Drop file here or click to upload
        </span>
        <input
          type="file"
          name="myFile"
          className="drop-zone__inputa"
          accept={"*/image"}
        />
      </div>
    </>
  );
};

export default Album;
