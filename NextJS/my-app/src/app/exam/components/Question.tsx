import React from 'react'

interface QuestionProps {
    numberQuestion: number,
    title: string,
    setOnChange: (input:string) => void,
    onHandleClick: () => void
    result: string | number | string[] | number[]
}

const Question: React.FC<QuestionProps> = ({numberQuestion,title,setOnChange,result,onHandleClick}) => {
  return (
    <div className='mt-5'>
        <h1>Bài {numberQuestion}: {title}</h1>
        <input type="text" placeholder={''} className='p-1 border mr-2' onChange={(e)=>{setOnChange(e.target.value)}}/>
        <button className='border px-2 py-1 active:bg-gray-500' onClick={()=>{onHandleClick()}}>Click</button>
        <h1>Result:{result}</h1>
    </div>
  )
}

export default Question