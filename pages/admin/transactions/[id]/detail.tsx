import React, { useEffect, useState } from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { getTransactionsById } from "@/services/transaction.services";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const Detail = () => {
  const [transactionDetails, setTransactionDetails] = useState(
    {} as transaction
  );
  const router = useRouter();
  const id = router.query.id;
  const [cookie] = useCookies(["token"]);

  const getData = async (param: number) => {
    const transaction = await getTransactionsById(
      cookie.token as string,
      param,
      (status: boolean, res: any) => {
        setTransactionDetails(res.data);
      }
    );
  };

  useEffect(() => {
    if (id !== undefined) {
      const param = parseInt(id as string);
      getData(param);
    }
  }, [id]);

  console.log(transactionDetails);

  return (
    <div className=" p-4 container">
      <BackButton id="transactions" />
      <h1 className=" text-3xl my- text-center py-8">Show Transaction</h1>
      <div className=" flex flex-col border-2 border-regular rounded-xl w-full p-4">
        {Object.keys(transactionDetails).length > 0 ? (
          <>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">
                Transaction Id
              </span>
              <span>{transactionDetails.id}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">User Id</span>
              <span>{transactionDetails.user_id}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Nama User</span>
              <span>
                {transactionDetails.first_name} {transactionDetails.second_name}
              </span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Title</span>
              <span>{transactionDetails.title}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Pricing Id</span>
              <span>{transactionDetails.pricing_id}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Price</span>
              <span>{transactionDetails.price}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">Status</span>
              <span>{transactionDetails.status}</span>
            </div>
            <div className=" my-4">
              <span className=" text-xl mr-4 text-gray-500">
                Account Number
              </span>
              <span>{transactionDetails.account_number}</span>
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
