import { height, maxHeight, maxWidth } from "@mui/system";
import React, { useState } from "react";

function MultipleAttachments() {
  const [files, setFiles] = useState([]);

  function handleFileInputChange(event) {
    const newFiles = [...files];
    for (let i = 0; i < event.target.files.length; i++) {
      newFiles.push(event.target.files[i]);
    }
    setFiles(newFiles);
  }

  function renderAttachments() {
    return files.map((file, index) => (
      <div key={index}>
        <p>{file.name}</p>
        <img src={URL.createObjectURL(file)} alt={file.name} width="650px"/>
      </div>
    ));
  }

  return (
    <div>
      <input type="file" multiple onChange={handleFileInputChange} />
      <div>{renderAttachments()}</div>
    </div>
  );
}

export default MultipleAttachments;
