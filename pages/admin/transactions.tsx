import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/organisms/Admin/navbar";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { getAllTransactions } from "@/services/transaction.services";
import { useCookies } from "react-cookie";
import Spinner from "@/components/Spinner";

const Transactions = () => {
  const [dataList, setDataList] = useState([] as transaction[]);
  const [cookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    getAllTransactions(cookie.token as string, (status: boolean, res: any) => {
      if (status) {
        setDataList(res.data);
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" mt-20">
        <h1 className=" text-center text-regular">Transactions</h1>
        {loading ? (
          <Spinner />
        ) : (
          <table className=" w-5/6 border-separate border-spacing-2 mx-auto">
            <thead>
              <tr>
                <th className=" border border-slate-600 rounded-md">
                  Transaction Id
                </th>
                <th className=" border border-slate-600 rounded-md">User Id</th>
                <th className=" border border-slate-600 rounded-md">
                  Nama User
                </th>
                <th className=" border border-slate-600 rounded-md max-md:hidden">
                  Status
                </th>
                <th className=" border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(dataList).length > 0 &&
                dataList.map((transaksi, index) => (
                  <tr key={index} className=" h-8">
                    <td className=" border border-slate-700 rounded-md text-center">
                      {transaksi.id}
                    </td>
                    <td className=" border border-slate-700 rounded-md text-center">
                      {transaksi.user_id}
                    </td>
                    <td className=" border border-slate-700 rounded-md text-center">
                      {transaksi.first_name} {transaksi.second_name}
                    </td>
                    <td className=" border border-slate-700 rounded-md text-center max-md:hidden">
                      {transaksi.status}
                    </td>
                    <td className=" border border-slate-700 rounded-md text-center">
                      <div className=" flex justify-center gap-x-4">
                        <Link
                          className=" nav-link page-scroll"
                          href={`/admin/transactions/${transaksi.id}/detail`}
                        >
                          <BsInfoCircle className=" text-2xl text-green-800" />
                        </Link>
                        <Link
                          className=" nav-link page-scroll"
                          href={`/admin/transactions/${transaksi.id}/edit`}
                        >
                          <AiOutlineEdit className=" text-2xl text-yellow-600" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Transactions;
