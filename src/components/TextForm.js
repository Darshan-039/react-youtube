import React, { useState } from 'react'


export default function TextForm(props) {
    const [Text, setText] = useState("");

    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase successfully" , "success");
    }

    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase successfully" , "success");
    }

    const handleClClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared successfully" , "success");
    }


    const handleCpClick = () => {
        navigator.clipboard.writeText(Text);
        props.showAlert("Text copied successfully" , "success");

    }

    const handlespaceClick = () => {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));   
        props.showAlert("Extra spaces removed successfully" , "success");
    }


    const handleonChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'darkgray':'white' , color: props.mode==='dark'?'white':'black'}} onChange={handleonChange} value={Text} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={Text.length===0} className="btn  mx-2 my-1" style={{backgroundColor: props.color==='primary'?'white':'blue', color: props.color==='primary'?'black':'white',fontWeight: props.color==='primary'?'bold':'100'}} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={Text.length===0} className="btn  mx-2 my-1" style={{backgroundColor: props.color==='primary'?'white':'blue', color: props.color==='primary'?'black':'white',fontWeight: props.color==='primary'?'bold':'100'}} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={Text.length===0} className="btn  mx-2 my-1" style={{backgroundColor: props.color==='primary'?'white':'blue', color: props.color==='primary'?'black':'white',fontWeight: props.color==='primary'?'bold':'100'}} onClick={handleClClick}>Clear All</button>
                <button disabled={Text.length===0} className="btn  mx-2 my-1" style={{backgroundColor: props.color==='primary'?'white':'blue', color: props.color==='primary'?'black':'white',fontWeight: props.color==='primary'?'bold':'100'}} onClick={handleCpClick}>Copy to clipboard</button>
                <button disabled={Text.length===0} className="btn  mx-2 my-1" style={{backgroundColor: props.color==='primary'?'white':'blue', color: props.color==='primary'?'black':'white',fontWeight: props.color==='primary'?'bold':'100'}} onClick={handlespaceClick}>Remoce extra spaces</button>
            </div>

            <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{Text===''?'Nothing to Preview':Text}</p>
            </div>
        </>
    )
}




