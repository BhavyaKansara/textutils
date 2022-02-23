import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }

    const handleLoClick = () =>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }

    


    const handleOnChange = (event) =>{
        console.log("Uppercase was clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
  return (
      <>

    <div className="container" style={{color: props.Mode==='dark'?'white':'#0d4166'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.Mode==='dark'?'grey':'white', color: props.Mode==='dark'?'white':'#0d4166' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            
    </div>
    <div className="container my-3 " style={{color: props.Mode==='dark'?'white':'#0d4166'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>
    </div>
      </>
  )
}
