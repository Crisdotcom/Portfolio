import React from 'react'

const StackItem = ({img, text}) => {
  return (
    <div>
        <img src={img} alt="/" className='w-[80x] h-[80px] hover:scale-110 ease-in duration-200'/>
        <p className='text-center font-bold'>{text}</p>
    </div>
    
  )
}

export default StackItem