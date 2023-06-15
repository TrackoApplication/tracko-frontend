import { height, maxHeight, maxWidth } from "@mui/system";
import React, { useState } from "react";

function MultipleAttachments() {
  const [files, setFiles] = useState([]);

  function handleFileInputChange(event) {
    const newFiles = [...files]; // Make a copy of the current files array
    for (let i = 0; i < event.target.files.length; i++) {
      newFiles.push(event.target.files[i]); // Add each selected file to the copy
    }
    setFiles(newFiles); // Update the state with the new array of files
  }

  function renderAttachments() {
    //transform each file in the files array into a JSX element
    return files.map((file, index) => (
      <div key={index}>
        <p>{file.name}</p>
        <img src={URL.createObjectURL(file)} alt={file.name} width="600px"/>
      </div>
    ));
  }

  return (
    <div style={{ margin: '10px 0 20px 0' }}>
      <input type="file" multiple onChange={handleFileInputChange} />
      <div>{renderAttachments()}</div>
    </div>
  );
}

export default MultipleAttachments;
