import React, { useEffect } from "react";
import { useState } from "react";

const Dummy1 = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [defaultImage, setDefaultImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];     //gets the selected image from the 'input' element's 'onchange event' to "files array" as 0th element
    const reader = new FileReader();

    if (!file) {
      setImagePreview(null);
      return;
    }

    reader.onloadend = () => {   //onloadend is an event handler of Filereader object
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };
  useEffect(() => {
    setDefaultImage(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    );
  }, []);

  return (
    <div>
      <label>
        Choose File to upload
        <input 
        type="file" onChange={handleImageUpload} />
      </label>
      {imagePreview ? (  //this is a conditional redering statement and checks whether the "imagePreview" is true or false.
        <img src={imagePreview} alt="Preview" />
      ) : (
        <img src={defaultImage} alt="Default" />
      )}
    </div>
  );
};

export default Dummy1;
