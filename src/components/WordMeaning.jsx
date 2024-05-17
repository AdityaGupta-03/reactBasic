import React, { useState } from 'react'

export default function WordMeaning() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [Rendered, setRendered] = useState(false);
  const [showWord, setShowWord] = useState('');

  const handleChange = (e) => {
    if(e.target.value){
      setWord(e.target.value);
    }else{
      handleClear();
    }
  };

  const handleClear = (e) => {
    document.getElementById("text").value="";
    setWord("");
    setMeaning("");
    setRendered(false)
  };
  const handleFind = async (e) => {
    e.preventDefault();
    setShowWord(word);
    if (word) {
      await fetchMeaning(word);
      setRendered(true);
    }
  };

  const fetchMeaning = async (word) => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    if (data && data.length > 0 && data[0].meanings && data[0].meanings.length > 0) {
      setMeaning(data[0].meanings[0].definitions[0].definition);
    } else {
      setMeaning('No definition found.');
    }
  };

  function Meaning(){
    return(
      <>
        <p className='fs-5'>Meaning of {showWord} : </p>
        <h3>{meaning}</h3>
      </>
    );
  }

  return (
    <div className="container my-3">
      <h1>Write Word to find Meaning: </h1>
      <div class="form-floating mt-3">
        <textarea class="form-control" placeholder="Drop your Word" id="text" onChange={handleChange}></textarea>
        <label for="floatingTextarea">Drop Your Word</label>
      </div>
      <button className="btn btn-success my-3 " onClick={handleFind}>Find</button>
      <button className="btn btn-dark my-3 mx-3" onClick={handleClear}>Clear</button>
      <hr />
      {Rendered && <Meaning />}
    </div>
  );
}
