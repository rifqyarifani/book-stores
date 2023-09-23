import React, { useState, useEffect } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { updateTransaction } from "@/services/transaction.services";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const Edit = () => {
  const [status, setStatus] = useState("");
  const [cookie] = useCookies(["token"]);
  const router = useRouter();
  const id = router.query.id;

  const handleEditTransaction: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(status);
    const param = parseInt(id as string);
    const data = {
      status: status,
    };

    updateTransaction(cookie.token as string, param, data);
    // window.location.href = "/admin/transactions";
  };

  return (
    <div className=" p-4">
      <BackButton id="transactions" />
      <h1 className=" text-3xl my-4">Edit Transaction</h1>
      <form
        onSubmit={handleEditTransaction}
        className=" flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
      >
        <label htmlFor="status" className=" text-xl mr-4 text-gray-500">
          Status
        </label>
        <select id="status" onChange={(e) => setStatus(e.target.value)}>
          <option value="Failed">Failed</option>
          <option value="Success">Success</option>
        </select>
        <button className=" p-2 bg-sky-300 m-8 rounded-2xl" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default Edit;
