
import { useState } from "react";

const Dummy = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    setSelectedImage(e.target.files[0]); //files should be passed as an array
  };

  return (
    <>
      <div className="container">
        <label>
          Choose File to Upload:
          <input
            type="file"
            style={styles.input}
            className="form-control"
            onChange={imageChange} //onchange event occurs when a value of a HTML element is changed
            accept="image/png , image/jpeg , image/webp"
          />
          <br />
        </label>

        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)} //this static method creates a string containing a URl representing the object given in the parameter(selectedImage)
              style={styles.image}
              alt="Thumb"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Dummy;

// Just some styles
const styles = {
  preview: {
    marginTop: 50,
  },

  image: { maxWidth: "100%", maxHeight: 320 },

  input: {
    display: "none", //hides the irrelavent details in the "input" tag
  },
};
