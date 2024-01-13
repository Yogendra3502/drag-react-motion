import React from 'react'
import { IoIosClose } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

import { FaRegFileAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={.1}
    dragTransition={{bounceStiffness:100, bounceDamping:30}}  className='relative w-[20vw] h-[60vh] rounded-[50px] bg-zinc-900/90 px-8 py-10 text-white overflow-hidden '>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight f '>
            {data.decs}
        </p>
        <div className='flex items-center justify-between px-8 py-3 '>
            <h5 className=''>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close? <IoIosClose />:<IoMdDownload size=".7em"  color="#ffff" />  }
            </span>
        </div>
        {data.tag.isOpen && (<div className={`tag w-full mt-24 pt-5 pb-4   text-2xl ${data.tag.tagColor === "blue" ? "bg-blue-600 " :"bg-green-600"} flex justify-center items-center`}> 
           <h3 className='text-md  '>{data.tag.tagTitle}</h3>
            </div>)}

    </motion.div>
  )
}

export default Card