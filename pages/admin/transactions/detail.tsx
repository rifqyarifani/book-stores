import React from 'react'
import BackButton from "@/components/molecules/BackButton/index"

const Detail = () => {
  return (
    <div className=' p-4'>
      <BackButton
      id="transactions"
      />  
      <h1 className=' text-3xl my-4'>Show Transaction</h1>
        <div className=' flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Transaction Id</span>
            <span>1234</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>User Id</span>
            <span>1535</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Title</span>
            <span>Premium Non-Fiksi</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Price</span>
            <span>49.999</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>status</span>
            <span>Pending</span>
          </div>
        </div>
    </div>
  )
}

export default Detail