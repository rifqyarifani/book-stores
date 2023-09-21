import React, { useState, useEffect } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { getSinglePricing } from "@/services/pricing.services";
import { useRouter } from "next/router";

const Detail = () => {
  const [pricingDetails, setPricingDetails] = useState({} as PricingList);

  const router = useRouter();
  const id = router.query.id;

  const getData = async (param: number) => {
    const pricing = await getSinglePricing(param);
    if (pricing.data) {
      setPricingDetails(pricing.data);
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      const param = parseInt(id as string);
      getData(param);
    }
  }, [id]);

  console.log(pricingDetails);

  return (
    <div className=" p-4">
      <BackButton id="pricing" />
      <h1 className=" text-3xl my-4">Show Pricing</h1>
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        <div className=" my-4">
          <span className=" text-xl mr-4 text-gray-500">Id</span>
          <span>1</span>
        </div>
        <div className=" my-4">
          <span className=" text-xl mr-4 text-gray-500">Title</span>
          <span>Premium Non-Fiksi</span>
        </div>
        <div className=" my-4">
          <span className=" text-xl mr-4 text-gray-500">Price</span>
          <span>49.999</span>
        </div>
        <div className=" my-4">
          <span className=" text-xl mr-4 text-gray-500">Description</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            corporis maxime eligendi blanditiis hic nisi laudantium a dolorem,
            ex iste?
          </span>
        </div>
        <div className=" my-4">
          <span className=" text-xl mr-4 text-gray-500">details</span>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            impedit?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
