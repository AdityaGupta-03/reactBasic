import React from 'react'

export default function Form() {
  return (
    <div className='my-3'>
        <h1>Enter your Text here</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Change</button>
    </div>
  );
}