import React from "react";

function Image(props) {
    return(
        <div>
            <h4>{props.api.name}</h4>
            <img className={props.className+" abs-img"} src={props.api.url} alt="meme" />
            <h3 className="t1">{props.textes.t1}</h3>
            <h3 className="t2">{props.textes.t2}</h3>
        </div>
    )
}
export default Image