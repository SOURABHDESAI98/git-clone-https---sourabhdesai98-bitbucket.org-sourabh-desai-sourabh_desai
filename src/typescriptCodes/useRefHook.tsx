import React, { useRef, useState } from 'react'

export default function UseRefHook() {

  const INPUTELEM = useRef<HTMLInputElement>(null);
  const [isRef, setRef] = useState("");
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: "row", justifyContent: "center", backgroundColor: "black", color: "white" }}>

        <input type='text' ref={INPUTELEM}></input>
        <button className='btn btn-dark' onClick={() => { setRef(INPUTELEM.current!.value) }} >set value</button>

      </div>
      <p style={{ padding: "0.5rem",color:"white",textAlign:"center" }}>{isRef}</p>
    </div>

  )
}
