import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import  {cities } from './city'
import { Statename}  from './state.js'

export default function Cites() {
 

 const [result,ddlvalue]=useState(cities.state)
 const ddlhandler=e=>{
  ddlvalue(e.label)
 }
  return (
    <div>

      <Select style="color:red;" options={
  cities.map(record=>{
    return(
      <div>
        {
          record.state
        }
      </div>
    )
  })
} onChange={ddlhandler}></Select>

    <center>
      {/* <h2>{result}</h2> */}
    </center>
    </div>
  )
}

