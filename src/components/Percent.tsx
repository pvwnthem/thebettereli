import React from "react"
import { useState } from "react"
const Percent = (props:any) => {
    
    if (props.data > props.data2) {
        return (
            <p className='text-6xl text-center mt-16 text-bold mb-8 text-green-600' >{props.calc}%</p>
        )
    }
    if (props.data < props.data2) {
        return (
            
                <p className=' text-6xl text-center mt-16 text-bold mb-8 text-red-600' >{props.calc}%</p>
            
        )
    }  
    if (props.data = props.data2) {
        return (
        
            
                <p className='text-6xl text-center mt-16 text-bold mb-8 text-yellow-600' >{props.calc}%</p>
            
        
        )}
    return (<p>waiting</p>)
}
 
export default Percent; ;