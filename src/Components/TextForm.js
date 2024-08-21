import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClearText=()=>{
        let newText='';
        setText(newText);
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="10" value={text}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>

        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minute need to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div> 
        </>
  )
}
