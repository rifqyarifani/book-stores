import React, {useState} from 'react'
import BackButton from "@/components/molecules/BackButton/index"

const Edit = () => {

    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("Premium Non-Fiksi");
    const [price, setPrice] = useState("49.999")
    const [duration, setDuration] = useState('1 bulan')
    const [description, setDescription] = useState('ini merupakan deskripsi')
    const [details, setDetails] = useState("ini merupakan deskripsi")



    const handleEditPricing = () => {
        const data = {
          title,
          price,
          duration,
          description,
          details
        };
    }
  return (
    <div className=" p-4">
      <BackButton
      id="pricing"
      />
      <h1 className=" text-3xl my-4">Edit Book</h1>
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Details</label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className=" p-2 bg-sky-300 m-8 rounded-2xl"
          onClick={handleEditPricing}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default Edit