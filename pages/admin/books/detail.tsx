import React from 'react'
import BackButton from "@/components/molecules/BackButton/index"

const Detail = () => {
  return (
    <div className=' p-4'>
      <BackButton
      id="books"
      />
      <h1 className=' text-3xl my-4'>Show Book</h1>
        <div className=' flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Id</span>
            <span>1</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Title</span>
            <span>How To Win Friends and Influence People</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Category</span>
            <span>Self Improvement</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Author</span>
            <span>Dale Carnegie</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Image</span>
            <span>ini gambar</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Description</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis maxime eligendi blanditiis hic nisi laudantium a dolorem, ex iste?</span>
          </div>
          <div className=' my-4'>
            <span className=' text-xl mr-4 text-gray-500'>Content</span>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, impedit?</span>
          </div>
        </div>
    </div>
  )
}

export default Detail