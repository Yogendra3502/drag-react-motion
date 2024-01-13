import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {
    const ref = useRef(null)
    const data =[
        {
            decs: "this is background color of the card that will be display.",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true, tagTitle:  "Download Now" , tagColor:"green"          }
        },
        {
            decs: "this is background color of the card that will be display.",
            filesize:".9mb",
            close:false,
            tag:{
                isOpen:true, tagTitle:  "Download Now" , tagColor:"blue"          }
        },
        {
            decs: "this is background color of the card that will be display.",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true, tagTitle:  "upload" , tagColor:"green"          }
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5 '>
        
        {data.map((item, index)=>(<Card data ={item} key={index} reference={ref}/>))}
    </div>
  )
}

export default Forground