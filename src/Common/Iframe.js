import React from "react";

// const src = "https://www.google.com/webhp?igu=1";

function Iframe({ src }) {
    return (
        <div>
            <iframe title="Ifr" className="Iframe" src={src}></iframe>
        </div>
    );
}

export default Iframe;
