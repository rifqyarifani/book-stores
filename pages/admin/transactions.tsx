import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/organisms/Admin/navbar";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { getAllTransactions } from "@/services/transaction.services";
import { useCookies } from "react-cookie";

const Transactions = () => {
  const [dataList, setDataList] = useState([] as transaction[]);
  const [cookie] = useCookies(["token"]);

  const getData = () => {
    getAllTransactions(cookie.token as string, (status: boolean, res: any) => {
      if (status) {
        setDataList(res.data);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dataList);
  return (
    <>
      <Navbar />
      <div className=" mt-20">
        <h1 className=" text-center text-regular">Transactions</h1>
        <table className=" w-5/6 border-separate border-spacing-2 mx-auto">
          <thead>
            <tr>
              <th className=" border border-slate-600 rounded-md">
                Transaction Id
              </th>
              <th className=" border border-slate-600 rounded-md">User Id</th>
              <th className=" border border-slate-600 rounded-md max-md:hidden">
                Status
              </th>
              <th className=" border border-slate-600 rounded-md">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key="1" className=" h-8">
              <td className=" border border-slate-700 rounded-md text-center">
                1234
              </td>
              <td className=" border border-slate-700 rounded-md text-center">
                5124
              </td>
              <td className=" border border-slate-700 rounded-md text-center max-md:hidden">
                Pending
              </td>
              <td className=" border border-slate-700 rounded-md text-center">
                <div className=" flex justify-center gap-x-4">
                  <Link
                    className=" nav-link page-scroll"
                    href="/admin/transactions/detail"
                  >
                    <BsInfoCircle className=" text-2xl text-green-800" />
                  </Link>
                  <Link
                    className=" nav-link page-scroll"
                    href="/admin/transactions/edit"
                  >
                    <AiOutlineEdit className=" text-2xl text-yellow-600" />
                  </Link>
                  <Link
                    className=" nav-link page-scroll"
                    href="/admin/transactions/delete"
                  >
                    <MdOutlineDelete className=" text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Transactions;
