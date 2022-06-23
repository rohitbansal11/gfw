import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import  {cities } from './city'
import { Statename}  from './state.js'

export default function States() {
 

 const [result,ddlvalue]=useState(Statename.label)
 const ddlhandler=e=>{
  ddlvalue(e.label)
 }
  return (
    <div>

      <Select style="color:red;" options={Statename} onChange={ddlhandler}></Select>

    <center>
      {/* <h2>{result}</h2> */}
    </center>
    </div>
  )
}

