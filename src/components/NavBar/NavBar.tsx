import React, { useState } from 'react'
import { EXAMPLES } from '../../dats2';



export default function NavBar() {
    const [isKey,setKey]=useState("components");

    let value=isKey;
    return (
        <>
        <div>

            <div style={{width:"30%",marginLeft:"10%"}} className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button onClick={()=>{setKey("components")}} type="button" className="btn btn-info text-white">Components</button>
                <button onClick={()=>{setKey("jsx")}} type="button" className="btn btn-info text-white">JSX</button>
                <button onClick={()=>{setKey("props")}} type="button" className="btn btn-info text-white">Props</button>
            </div>
        </div>

        <div>
            <h1 style={{color:"skyblue",textAlign:"center"}}>{EXAMPLES[value].title}</h1>
            <p  style={{color:"white",textAlign:"center"}}>{EXAMPLES[value].description}</p>
        </div>


        </>
    )
}
