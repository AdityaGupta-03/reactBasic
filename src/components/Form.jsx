import React, { useState } from 'react';

// Changing the state by using hooks
export default function Form(props) {
  const [text, setText] = useState("");
  const [preview,setPreview] = useState("");
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  function toUpperCase() {
    // Simply passing text.toUpperCase() in setText will change the text but not previewed text
    // Therefore after changing the text store it in a variable
    const upperText = text.toUpperCase();
    setText(upperText);
    setPreview(upperText);
  }

  function toLowerCase() {
    // Simply passing text.toLowerCase() in setText will change the text but not previewed text
    // Therefore after changing the text store it in a variable
    const lowerText = text.toLowerCase();
    setText(lowerText);
    setPreview(lowerText);
  }
  let toClear = ()=>{
    document.getElementById("text").value="";
    setText("");
    setPreview("");
  }

  // This will handle the spaces tabs and newlines.
  let content = text === "" ? 0 : text.split(/[\s]+/).length;
  let readingTime = 0.004 * content;
  let string=0;
  if(readingTime<Math.ceil(readingTime)){
    string = "<"+Math.ceil(readingTime);
  }
  return (
    <>
      <div className='my-3'>
        <h1>{props.heading}:</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} id="text" rows="5" ></textarea>
        </div>
        <button className="btn btn-primary " onClick={toUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-warning m-3" onClick={toLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-dark" onClick={toClear}>Clear Text</button>

      </div>
      <hr />
      
      <p>{text.length} characters and {content} words</p>
      <p>Estimated Reading Time: {string} minute(s)</p>
      <h2>Preview</h2>
      <hr />
      <p id='preview'>{preview}</p>
    </>
  );
}
