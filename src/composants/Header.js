import React from "react";
import '../styles/Header.css';

function Header() {
    // ...

    return(
        <div className="header-div">
            <img className="header-div-img" src="/images/logo.png" alt="memes-logo"/>
            <h2 className="header-div-h2">Sans Memes</h2>
            <h4 className="header-div-h4">Create New Memes</h4>
        </div>
    );
}

export default Header;