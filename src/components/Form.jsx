import React, { useState } from 'react';

// Changing the state by using hooks
export default function Form(props) {
  const [text, setText] = useState("");

  function handleUpperCase() {
    setText(text.toUpperCase());
  }

  function handleLowerCase() {
    setText(text.toLowerCase());
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
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
      <p id='preview'>{text}</p>
    </>
  );
}
