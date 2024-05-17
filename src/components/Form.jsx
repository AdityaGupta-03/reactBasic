import React, {useState} from 'react';

// Changing the state by using hooks
export default function Form(props) {
  const [text, setText] = useState("Analyze Below");

  function handleEvent(){
    setText(text.toUpperCase());
  }

  return (
    <div className='my-3'>
        <h1>{props.heading}-{text}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="text" rows="8"></textarea>
        </div>
        <MyButton onClick={handleEvent} />
    </div>
  );
}

function MyButton(props){
  return(
    <button className="btn btn-primary" onClick={props.onClick} >Convert to Uppercase</button>
  );
}