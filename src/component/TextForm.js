import React, { useState } from 'react'




export default function TextForm(props) {
    const [text, setText] = useState("")
    const HandleClick = () => {
        // console.log("click in upper case"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAert("Converted to the Upper Case", "success")
    }
    const HandleLoClick = () => {
        // console.log("click in upper case"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAert("Converted to the Lower Case", "success")
    }
    const FontChange = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join("_"));
        props.ShowAert("Converted to the _UnderScore_Case", "success")
    }
    const ClearText = () => {
        setText("");
        props.ShowAert("Clear all Text", "success")

    }
    const CopyText = () => {
        let txt = document.getElementById('mybox')
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.ShowAert("Copy text to Clipboard", "success")
    }



    const handleOnechange = (event) => {
        // console.log("click" + text);
        setText(event.target.value)

    }

    // setText("new text");
    return (
        <>
        <h1>{props.heading}</h1>
            <div>
                <div className="mb-3">
                    <label htmlFor="txtform" className="form-label">{props.title}</label>
                    <textarea className="form-control" value={text} onChange={handleOnechange} id="mybox" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black', fontFamily: 'cursive' }} rows="9"></textarea>
                    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'danger' : 'success'} my-3 mx-2`} onClick={HandleClick}>Convert to Upper Case</button>
                    <button disabled={text.length===0} className={`btn btn-${props.mode === 'light' ? 'danger' : 'success'} my-3 mx-2`} onClick={HandleLoClick}>Convert to Lower Case</button>
                    <button disabled={text.length===0} id='fontchange' className={`btn btn-${props.mode === 'light' ? 'danger' : 'success'} my-3 mx-2`} onClick={FontChange}>Change Your Font</button>
                    <button disabled={text.length===0} id='fontchange' className={`btn btn-${props.mode === 'light' ? 'danger' : 'success'} my-3 mx-2`} onClick={CopyText}>Copy Text</button>
                    <button disabled={text.length===0} id='fontchange' className={`btn btn-${props.mode === 'light' ? 'danger' : 'success'} my-3 mx-2`} onClick={ClearText}>Clear Screen</button>
                </div>
            </div>

            <div className="container">

                <h1>Number of Word and charectar</h1>
                <p>charectar is <b>{text.length}</b></p>

                <p>Word is <b> {text.split(" ").filter((element) => { return element.length !== 0 }).length}</b></p>

                <p>Word Read Time:- <b>{0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b></p>

                <h2>Inside Word :-</h2>
                <p style={{ 'fontsize': "large" }}><b>{text}</b></p>
            </div>

        </>
    )
};
