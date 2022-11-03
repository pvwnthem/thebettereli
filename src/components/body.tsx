import React from 'react'
import {useState, useRef, useEffect} from 'react';
interface Props {
    
}
 
const Body= (props:any) => {
    const baseupdateurl:string = "https://devinspo.herokuapp.com/api/v1/posts/eli/updatelike"
    const eurl:string = "https://devinspo.herokuapp.com/api/v1/posts/eli/getlikes?eli=1"
    const [data, setData] = useState('ee')
    useEffect(() => {
        fetch(eurl, {mode: "no-cors"})
           .then(response => response.json().then(data => setData(data)))
    }, [])
    return ( 
        <>
            <div className='w-full h-full'>
                <div className='flex md:flex-row flex-col'>
                    
                    <p>{data}</p>
                </div>
            </div>
        </>
    );
}
 
export default Body;