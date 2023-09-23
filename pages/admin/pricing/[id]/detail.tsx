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

  return (
    <div className=" p-4">
      <BackButton id="pricing" />
      <h1 className=" text-3xl my-4">Show Pricing</h1>
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        {Object.keys(pricingDetails).length > 0 ? (
          <>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Id</span>
              <span>{pricingDetails.id}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Title</span>
              <span>{pricingDetails.title}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Price</span>
              <span>{pricingDetails.price}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Duration</span>
              <span>{pricingDetails.duration}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Description</span>
              <span>{pricingDetails.description}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">details</span>
              <span>{pricingDetails.details}</span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Detail;
