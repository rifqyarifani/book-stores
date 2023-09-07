import React from 'react'
import Title from './title'

export default function index() {
  return (
    <>
       <header
        id="header"
        className="text-center header py-28 md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
      >
        <div className=" flex flex-col md:flex-row items-center justify-evenly">
          <Title />
          <img
            className="w-72 h-64 md:w-[400px] md:h-[400px]"
            src="images/imagehero.svg"
            alt="alternative"
          />
        </div>
      </header>
    </>
  )
}