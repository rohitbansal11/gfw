import React from "react";
import { TextInput } from "@components/Common";
import { uploadpreset, apikey, APISCRET } from "@utils/FIleConstant";
import { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MultipleCloudnary({ handleImge }) {
  const [image, setImage] = useState([]);

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
        let arr = [...image];
        arr.push(data?.url);
        setImage(arr);
        handleImge(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      {image?.length > 0 && (
        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
          >
            {image?.map((e) => {
              return (
                <div>
                  <img src={e} />
                </div>
              );
            })}
          </Carousel>
        </div>
      )}

      <TextInput
        name="image"
        id="image"
        label="image"
        placeholder="image"
        type="file"
        required={true}
        handleChange={handleImgeData}
      />
    </>
  );
}
