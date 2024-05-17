import React, { useState } from 'react';

// Changing the state by using hooks
export default function Form(props) {
  const [text, setText] = useState("");
  const [preview,setPreview] = useState("");
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  function handleUpperCase() {
    // Simply passing text.toUpperCase() in setText will change the text but not previewed text
    // Therefore after changing the text store it in a variable
    const upperText = text.toUpperCase();
    setText(upperText);
    setPreview(upperText);
  }

  function handleLowerCase() {
    // Simply passing text.toLowerCase() in setText will change the text but not previewed text
    // Therefore after changing the text store it in a variable
    const lowerText = text.toLowerCase();
    setText(lowerText);
    setPreview(lowerText);
  }

  // This will handle the spaces tabs and newlines.
  let content = text === "" ? 0 : text.split(/[\s]+/).length;

  return (
    <>
      <div className='my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} id="text" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowerCase}>Convert to Lowercase</button>
      </div>
      <hr />
      
      <p>{text.length} characters and {content} words</p>
      <p>{0.004 * content} minutes to read the text</p>
      <h2>Preview</h2>
      <p id='preview'>{preview}</p>
    </>
  );
}
