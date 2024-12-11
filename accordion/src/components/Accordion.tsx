import React from 'react'
import data from '../data/data'

function Accordion() {
  return (
    <div>
        
        {data && data.length > 0
        data.map(()=>{
            <div id={id}>{question}</div>
        })}
    </div>
  )
}

export default Accordion