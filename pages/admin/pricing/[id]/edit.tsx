import React, { useState, useEffect } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { getSinglePricing } from "@/services/pricing.services";
import { useRouter } from "next/router";
import { updatePricing } from "@/services/pricing.services";
import { useCookies } from "react-cookie";

const Edit = () => {
  const [pricingDetails, setPricingDetails] = useState({} as PricingList);
  const [cookie] = useCookies(["token"]);
  const router = useRouter();
  const id = router.query.id;
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");

  const getData = async (param: number) => {
    const pricing = await getSinglePricing(param);
    if (pricing.data) {
      setPricingDetails(pricing.data);
      setTitle(pricing.data.title);
      setPrice(pricing.data.price);
      setDuration(pricing.data.duration);
      setDescription(pricing.data.description);
      setDetails(pricing.data.details);
    }
  };

  useEffect(() => {
    const param = parseInt(id as string);
    getData(param);
  }, [id]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const param = parseInt(id as string);
    const data = {
      title: title,
      price: price,
      duration: duration,
      description: description,
      details: details,
    };

    updatePricing(param, data, cookie.token as string);
    router.push("/admin/pricing");
  };

  return (
    <div className=" p-4 container">
      <BackButton id="pricing" />
      <h1 className=" text-3xl my-4 text-center py-8">Edit Pricing</h1>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col border-2 border-regular rounded-xl w-[600px] p-4 mx-auto gap-y-2"
      >
        <label htmlFor="title" className=" text-xl mr-4 text-gray-500">
          Title
        </label>
        <input
          type="text"
          id="title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" border-2 border-gray-500 px-4 py-2 w-full"
        />
        <label htmlFor="price" className=" text-xl mr-4 text-gray-500">
          Price
        </label>
        <input
          type="text"
          id="price"
          defaultValue={price}
          onChange={(e) => setPrice(e.target.value)}
          className=" border-2 border-gray-500 px-4 py-2 w-full"
        />
        <label htmlFor="duration" className=" text-xl mr-4 text-gray-500">
          Duration
        </label>
        <input
          type="text"
          id="duration"
          defaultValue={duration}
          onChange={(e) => setDuration(e.target.value)}
          className=" border-2 border-gray-500 px-4 py-2 w-full"
        />
        <label htmlFor="description" className=" text-xl mr-4 text-gray-500">
          Description
        </label>
        <input
          type="text"
          id="description"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
          className=" border-2 border-gray-500 px-4 py-2 w-full"
        />
        <label htmlFor="details" className=" text-xl mr-4 text-gray-500">
          Details
        </label>
        <input
          type="text"
          id="details"
          defaultValue={details}
          onChange={(e) => setDetails(e.target.value)}
          className=" border-2 border-gray-500 px-4 py-2 w-full"
        />
        <button className=" p-2 btn-solid-reg m-8 rounded-2xl" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
