

import React from "react"
import  ReactDOM from "react-dom/client";



const HeadingComponent= ()=>(
<div id="container">
    <h1 className="heading">
    Namaste react function component
    </h1>
</div>
)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);