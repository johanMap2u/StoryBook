

import React from 'react'
import { Button } from '../Buttons/Button'

export default function Counter  () {
    const handleOnClick = (evtType)=>{
        if (evtType == 'ADD'){
            console.log('ADD')
        }else{
            console.log("Subtract")
        }
    }
  return (
    <>
        <span>Counter: {}</span>
        <Button label={'+'} onClick={()=>handleOnClick("ADD")} backgroundColor={"#2B860B"}/>
        <Button label={'-'} onClick={()=>handleOnClick("")} backgroundColor={"#2B860B"}/>
    </>
  )
}
