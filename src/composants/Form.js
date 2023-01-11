import React from "react";
import '../styles/Form.css';
import '../App.css'
import Image from "./Image";

function Form() {
    const [text, SetText] = React.useState({
        t1: 'top',
        t2: 'Bottom'
    });
    const [imageApi, setImageApi] = React.useState([]);

    function write(event) {
        var {id, value} = event.target
        SetText( (prevText) => {
            return { ...prevText,
                [id] : value  
            }
        })
    }

    React.useEffect( ()=>{        
        getImage();
    }, [])

    async function getImage() {
        const fetched = await fetch("https://api.imgflip.com/get_memes");
        const Result = await fetched.json();
        const arrayLength = Result.data.memes.length;
        let nbrAlt = Math.floor(Math.random() * arrayLength)
        setImageApi(Result.data.memes[nbrAlt])
    }

    return(
        <div className="form-div">
            <div className="form-div-form">
                <pre>
                <label htmlFor="t1" className="form-div-form-label">Top Text: </label>
                <input onChange={write} id="t1" name="text1" value={text.t1} className="form-div-form-input"
                        type="text" placeholder="Saisir 1ere partie"/>
                <label htmlFor="t2" className="form-div-form-label">Bottom Text: </label>
                <input onChange={write} id="t2" name="text2" value={text.t2} className="form-div-form-input"
                        type="text" placeholder="Saisir 2eme partie"/>
                <button onClick={getImage}
                        className="form-div-form-button">Generate a meme</button>
                </pre>
            </div>
            <Image className="carre" api={imageApi} textes={text}/>
        </div>
    );
}
export default Form;