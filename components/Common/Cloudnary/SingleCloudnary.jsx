import React from "react";
import { TextInput } from "@components/Common";
import { uploadpreset, apikey, APISCRET } from "@utils/FIleConstant";
import { useState } from "react";
import { ImCross } from "react-icons/im";
export default function SingleCloudnary({ handleImge }) {
  const [image, setImage] = useState("");

  const handleImgeData = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", uploadpreset);
    const options = {
      method: "POST",
      body: formData,
    };

    await fetch(
      `https://api.Cloudinary.com/v1_1/${apikey}/image/upload`,
      options
    )
      .then(async (r) => {
        let data = await r.json();
        setImage(data?.url);
        handleImge(data?.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCross = () => {
    setImage("");
  };
  return (
    <>
      {image !== "" ? (
        <div className="w-full">
          <div
            className="w-full mb-3 flex justify-end cursor-pointer"
            onClick={() => {
              handleCross();
            }}
          >
            <ImCross />
          </div>
          <div className="w-full flex justify-center">
            <img src={image} width="100" height="100" />
          </div>
        </div>
      ) : (
        <TextInput
          name="image"
          id="image"
          label="image"
          placeholder="image"
          type="file"
          required={true}
          handleChange={handleImgeData}
        />
      )}
    </>
  );
}
