import { useState } from "react"
import React from 'react'

function Username() {

    const [name, setName]=useState("")
  return (
    <div>
        <label htmlFor="Username">Enter Your Name: </label><br />
      <input id="Username" type="text" value={name} onChange={e=>setName(e.target.value)}/>
      {name ? <h2>Hello {name}!</h2> :<>{name}</>}
    </div>
  )
}

export default Username
