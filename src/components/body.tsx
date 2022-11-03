import React from 'react'
import axios from 'axios';
import {useState, useRef, useEffect} from 'react';
import { isJSDocMemberName } from 'typescript';
import { useCookies } from "react-cookie";

interface Props {
    
}
 
const Body= (props:any) => {

    const current = new Date();



// add a function to reset the cookie back to [] before adding to it
const nextYear = new Date();
nextYear.setFullYear(current.getFullYear() + 1);


    const [cookies, setCookie] = useCookies(['likes'])
    const [num, setNum] = useState(Number(props.likes))
    function removelikefromcookie(eli: number) {
        const old = Array(cookies.likes).flat()
        const value = eli

        let newarr:any = [] 

        newarr = old.filter(item => item !== value)
        console.log(newarr)
        setCookie('likes', newarr, {
            path: "/",
            expires: nextYear
        })


    }




    

    function addliketocookie (eli:number) {
        if(cookies.likes) {
            const old = Array(cookies.likes).flat()
            console.log(old)
            if (old.includes(eli) ) {
                console.log('already added to cookie')
            }
            else {
                old.push(eli)
            setCookie('likes', old, {
                path: '/',
                expires: nextYear,
                
            } )
            }
            
        }
        else {
            setCookie('likes', eli, {
                path: "/",
                expires: nextYear
            });
        }
    }
    function resolvebutton(eli:number) {
        const old = Array(cookies.likes).flat()
        if (old.includes(eli) ) {
            return true
        } else {
            return false
        }
    }
    











    const baseupdateurl:string = "https://devinspo.herokuapp.com/api/v1/posts/eli/addlike?eli=1"
    const baseupdateurl2:string = "https://devinspo.herokuapp.com/api/v1/posts/eli/removelike?eli=2"
    const baseupdateurl3:string = "https://devinspo.herokuapp.com/api/v1/posts/eli/addlike?eli=2"
    const baseupdateurl4:string = "https://devinspo.herokuapp.com/api/v1/posts/eli/removelike?eli=1"
    const eurl:string = "https://devinspo.herokuapp.com/api/v1/posts/eli/getlikes?eli=1"
    const curl:string = "https://devinspo.herokuapp.com/api/v1/posts/eli/getlikes?eli=2"
    const [data, setData] = useState(0)
    const [data2, setData2] = useState(0)

    const [button1, setButton1] = useState(resolvebutton(1))
    const [button2, setButton2] = useState(resolvebutton(2))

    const handler1 = () => {
        addliketocookie(1)
        axios.get(baseupdateurl)
        setButton1(true)
        setData(data + 1)
    }
    const handler12 = () => {
        removelikefromcookie(1)
        axios.get(baseupdateurl4)
        setButton1(false)
        setData(data - 1)
        
    }
    const handler2 = () => {
        addliketocookie(2)
        axios.get(baseupdateurl3)
        setButton2(true)
        setData2(data2 + 1)
    }
    const handler22 = () => {
        removelikefromcookie(2)
        axios.get(baseupdateurl2)
        setButton2(false)
        setData2(data2 - 1)
        
    }
    useEffect(() => {
        axios.get(eurl).then((res: any) => res).then((data: any) => {setData(Number(data.data.likes))
        console.log(data.data.likes)})
        axios.get(curl).then((res: any) => res).then((data: any) => {setData2(Number(data.data.likes))
            console.log(data.data.likes)})
    }, [])

    return ( 
        <>
            <div className='w-full h-full'>
                <div className='flex md:flex-row flex-col items-center'>
                    <div className='w-1/2 h-full '>
                        <img src='eli1.png' className='md:w-1/2 h-1/3 mt-24 md:px-16 ml-auto flex flex-col rounded-lg border border-12 border-black'></img>
                        <div className='md:w-1/2 ml-auto items-center'>
        <h1 className='text-2xl font-bold text-center'>
                                {data} </h1>
                                <div className=' flex flex-col items-center'>
                                {!button1 ? (
                        <button  onClick={() => {handler1()}}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                      </svg>
                      </button>
                    ) : (
                        <button onClick={() => {handler12()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                      </svg>
                      </button>
                    )}

                                </div>
                        
                        </div>
                        
                        
                        
                    </div>
                    <div className='w-1/2 h-full'>
                        <img src='eli2.png' className='md:w-1/2 h-1/3 mt-24 md:px-16 flex flex-col rounded-lg border border-12 border-black'></img>
                        <div className='md:w-1/2 items-center'>
        <h1 className='text-2xl font-bold text-center'>
                                {data2} </h1>
                                <div className='flex flex-col items-center'>
                                {!button2 ? (
                        <button  onClick={() => {handler2()}}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                      </svg>
                      </button>
                    ) : (
                        <button onClick={() => {handler22()}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                      </svg>
                      </button>
                    )}

                                </div>
                        
                        </div>
                        
                        
                        
                    </div>
                    
                   
                    
                    
                </div>
                
                    
            </div>
        </>
    );
                    }

 
export default Body;