import React from 'react'
import { useState } from 'react';

export default function About() {
    const [myStyle,setmyStyle]=useState({
        color : "black",
        backgroundColor: "white"
    });

    let btn;
    let changeMode=()=>{
        if(myStyle.color === "black"){
            setmyStyle({
                color : "white",
                backgroundColor: "black",
                border: "1px solid white"
            });
            btn = "dark";
        }
        else{
            setmyStyle({
                color : "black",
                backgroundColor: "white"
            });
            btn = "light";
        }
    }
    
    return (
        <div className="accordion px-5 py-5" id="accordionExample" style={myStyle}>
            <h1 className='my-3'>About: </h1>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Textutility is a software tool that allows users to extract useful insights and information from written text
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Doesn't require a paid license, fees, or donations, and doesn't have restrictions on how many times you can download it. Examples include Adobe PDF, Yahoo Messenger, and Skype.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatibility</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Browser Compatibility is the manner in which a web page looks in different web browsers. Different browsers read the website code differently. In other words, Chrome will render a website Differently than FireFox or Internet Explorer will.
                    </div>
                </div>
            </div>
            <button className={`btn btn-${btn} my-3`} onClick={changeMode}>Switch to {btn} Mode</button>
        </div>
    );
}
