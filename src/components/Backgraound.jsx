import React, { Fragment } from 'react'

const Backgraound = () => {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
        <div className='apsolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>
            Document
        </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[18vw] leading-none tracking-tighter font-semibold text-zinc-900'> Docs. </h1>
    </div>
    </>
  )
}

export default Backgraound