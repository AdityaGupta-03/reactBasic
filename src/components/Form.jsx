import React, { useState } from 'react';

// as there is no use of hooks , therefore we can write this code outside export
let toCopy = () => {
  let textarea = document.getElementById("textarea");
  textarea.select();
  // It is used to remove the blue selected text screen
  document.getSelection().removeAllRanges();

  // Copying the text to Clipboard via Navigator web API
  navigator.clipboard.writeText(textarea.value).then(() => {
    let copy = document.getElementById("copy");
    copy.innerText = "Text Copied";
    copy.classList.replace('btn-secondary', 'btn-success');
  }).catch(function (err) {
    alert('Could not copy text: ', err);
  });
}

// Changing the state by using hooks
export default function Form(props) {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("Enter something to preview");

  const handleOnChange = (event) => {
    setText(event.target.value);

    // If wew change the text after copy
    let copy = document.getElementById("copy");

    if (copy.innerText === "Text Copied") {
      copy.innerText = "Copy Text";
      copy.classList.replace('btn-success', 'btn-secondary');
    }

    if(event.target.value ===''){
      setPreview("Enter something to preview");
    }
  }

  function toUpperCase() {
    // Simply passing text.toUpperCase() in setText will change the text but not previewed text
    // Therefore after changing the text store it in a variable
    const upperText = text.toUpperCase();
    if(upperText.trim().length>0){
      setText(upperText);
      setPreview(upperText);
    }else{
      setPreview("Enter something to preview");
    }
  }

  function toLowerCase() {
    // Simply passing text.toLowerCase() in setText will change the text but not previewed text
    // Therefore after changing the text store it in a variable
    const lowerText = text.toLowerCase();
    if(lowerText.trim().length>0){
      setText(lowerText);
      setPreview(lowerText);
    }else{
      setPreview("Enter something to preview");
    }
  }

  let toClear = () => {
    document.getElementById("textarea").value = "";
    setText("");
    setPreview("Enter something to preview");
  }

  let handleSpace = () => {
    // if there are more than 1 spaces replace it with single space
    let newText = text.replace(/\s+/g, ' ').trim();
    setPreview(newText);
  }

  // This will handle the spaces tabs and newlines.
  let words = (text.replace(/\s+/g, ' ').trim().length === 0) ? 0 : (text.split(/[\s]+/).length);
  let time = 0.004 * words;
  let readingTime = 0;
  if (time < Math.ceil(time)) {
    readingTime = "<" + Math.ceil(time);
  }

  return (
    <>
      <div className='my-3'>
        <h1>{props.heading}:</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} id="textarea" rows="5" ></textarea>
        </div>
        {/* Disable the buttons if text is not there */}
        <button disabled={text.length===0} className="btn btn-primary " onClick={toUpperCase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-warning mx-3" onClick={toLowerCase}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-secondary" onClick={toCopy} id='copy'>Copy text</button>
        <button disabled={text.length===0} className="btn btn-danger mx-3" onClick={handleSpace}>Clear Spaces</button>
        <button disabled={text.length===0} className="btn btn-info" onClick={toClear}>Clear Text</button>
      </div>
      <hr />
      <p>{text.length} characters and {words} words</p>
      <p>Estimated Reading Time: {readingTime} minute(s)</p>
      <h2>Preview</h2>
      <hr />
      <p id='preview'>{preview}</p>
    </>
  );
}
