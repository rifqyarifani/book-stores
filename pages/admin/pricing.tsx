import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/organisms/Admin/navbar";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { getAllPricing } from "@/services/pricing.services";

const Pricing = () => {
  const [dataList, setDataList] = useState([] as PricingList[]);

  const getData = async () => {
    const pricing = await getAllPricing();
    if (pricing.data) {
      setDataList(pricing.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" mt-20">
        <h1 className=" text-center text-regular">Pricing</h1>
        <table className=" w-5/6 border-separate border-spacing-2 mx-auto">
          <thead>
            <tr>
              <th className=" border border-slate-600 rounded-md">No</th>
              <th className=" border border-slate-600 rounded-md">Title</th>
              <th className=" border border-slate-600 rounded-md max-md:hidden">
                Price
              </th>
              <th className=" border border-slate-600 rounded-md max-md:hidden">
                Duration
              </th>
              <th className=" border border-slate-600 rounded-md">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(dataList).length > 0 &&
              dataList.map((transaction, index) => (
                <tr key={transaction.id} className=" h-8">
                  <td className=" border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className=" border border-slate-700 rounded-md text-center">
                    {transaction.title}
                  </td>
                  <td className=" border border-slate-700 rounded-md text-center max-md:hidden">
                    {transaction.price}
                  </td>
                  <td className=" border border-slate-700 rounded-md text-center max-md:hidden">
                    {transaction.duration} hari
                  </td>
                  <td className=" border border-slate-700 rounded-md text-center">
                    <div className=" flex justify-center gap-x-4">
                      <Link
                        className=" nav-link page-scroll"
                        href={`/admin/pricing/${transaction.id}/detail`}
                      >
                        <BsInfoCircle className=" text-2xl text-green-800" />
                      </Link>
                      <Link
                        className=" nav-link page-scroll"
                        href={`/admin/pricing/${transaction.id}/edit`}
                      >
                        <AiOutlineEdit className=" text-2xl text-yellow-600" />
                      </Link>
                      <Link
                        className=" nav-link page-scroll"
                        href={`/admin/pricing/${transaction.id}/delete`}
                      >
                        <MdOutlineDelete className=" text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Pricing;
