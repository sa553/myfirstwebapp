import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TextForm from './TextForm'

export default function Navbar(proos) {
    const [text, setText]= useState('');
    const clickUpper = () =>
    {
        let newText= text.toUpperCase();
        setText(newText);
        proos.showAlert("Converted to UpperCase",'success');
    }
    const clickClear = () =>
    {
        let newText='';
        setText(newText);
        proos.showAlert("Text has been cleared",'success');
    }
    const clickCopy = () =>
    {
       var text= document.getElementById("myText");
       text.select();
       navigator.clipboard.writeText(text.value);
       proos.showAlert("Copied to ClipBoard",'success');
    }
    const clickLower = () =>
    {
        let newText= text.toLowerCase();
        setText(newText);
        proos.showAlert("Converted to LowerCase",'success');
    }
    const changeText = (event) =>
    {
        setText(event.target.value);
    }
  return (
    <div style={{backgroundColor: proos.mode === 'light'?'white':'#042743', color: proos.mode === 'light'?'black':'white'}}>
        <div className="mb-3">
            <h1>{proos.title}</h1>
        <label htmlFor="myText" className="form-label">Please Enter Text Below</label>
        <textarea className="form-control" id="myText" value={text} style={{backgroundColor: proos.mode === 'light'?'white':'grey', color: proos.mode === 'light'?'black':'white'}} onChange={changeText} rows="8"></textarea>
        <button className="btn btn-primary mx-1 my-2" onClick={clickUpper}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={clickLower}>Convert To Lowercase</button>        
        <button className="btn btn-primary mx-1 my-2" onClick={clickClear}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={clickCopy}>Copy Text</button>
        </div>
        <div className="container my-4">
            <h2>Text Summary</h2>
            <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p>
        </div>
        <div className="container my-4">
            <h2>Text Preview</h2>
            <p>{text.length>0? text: 'Enter Something in textbox to preview it here'}</p>
        </div>
    </div>
  )
}

TextForm.prototype = {title: PropTypes.string.isRequired};
TextForm.defaultProps= {title: 'Set Text Here'};

