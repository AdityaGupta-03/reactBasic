import React from 'react'

export default function Alert(props) {
    let toCapitalize= (word)=>{
        let lower = word.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1);
    }

    return (
    // Height is given in order to remove the CLS shift when alert is shown, therefore already we fixed the alert with some height
    <div style={{height:"50px"}}>
        {/* // Only if alert is not null then only show the component. */}
        {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
            <a href="/" class="alert-link">{toCapitalize(props.alert.type === "secondary" ? "please" : props.alert.type)}</a>: {props.alert.msg}
        </div>}
    </div>
    )
}
