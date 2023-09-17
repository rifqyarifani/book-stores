import React, {useState} from 'react'
import BackButton from "@/components/molecules/BackButton/index"

const Create = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("")
    const [content, setContent] = useState("")
    const [description, setDescription] = useState("")

    const handleSaveBook = () => {
        const data = {
          title,
          author,
          category,
          image,
          content,
          description
        };
    }
  return (
    <div className=" p-4">
      <BackButton
      id="books"
      />
      <h1 className=" text-3xl my-4">Create Book</h1>
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
          <label className=" text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className=" text-xl mr-4 text-gray-500">Image</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
          <label className=" text-xl mr-4 text-gray-500">Content</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className=" p-2 bg-sky-300 m-8 rounded-2xl"
          onClick={handleSaveBook}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default Create