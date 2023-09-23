import React, {useState} from 'react'
import BackButton from "@/components/molecules/BackButton/index"

const Edit = () => {

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("pending")


    const handleEditTransaction = () => {
        const data = {
          status
        };
    }
  return (
    <div className=" p-4">
      <BackButton
      id="transactions"
      />
      <h1 className=" text-3xl my-4">Edit Transaction</h1>
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className=" p-2 bg-sky-300 m-8 rounded-2xl"
          onClick={handleEditTransaction}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default Edit