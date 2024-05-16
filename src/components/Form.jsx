import React from 'react'

export default function Form(props) {
  return (
    <div className='my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="text" rows="8"></textarea>
        </div>
        {/* This button is allowed to change the state of the input field */}
        <button className="btn btn-primary">Conver to Uppercase</button>
    </div>
  );
}