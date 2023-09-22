import SubMenuNav from "@/components/molecules/Profile/SubMenuNav";
import React, { useState, useEffect } from "react";

type Props = {
  data?: transaction[];
};

export default function Transactions(props: Props) {
  const { data } = props;
  const [isActiveIndex, setIsActiveIndex] = useState(1);
  const [transactionList, setTransactionList] = useState<transaction[]>();

  const transactionsTypeList = (index: number) => {
    const transactionListSetter = (status: string) => {
      if (data) {
        const result = data.filter((item) => item.status == status);
        setTransactionList(result);
      }
    };

    if (index === 2) {
      transactionListSetter("pending");
    }

    if (index === 3) {
      transactionListSetter("failed");
    }

    if (index === 4) {
      transactionListSetter("success");
    }
  };

  useEffect(() => {
    transactionsTypeList(isActiveIndex);
  }, [isActiveIndex]);

  return (
    <>
      <h1 className="text-center mb-16">Riwayat Transaksi Pengguna</h1>
      <div className="grid grid-cols-4">
        <SubMenuNav
          isActive={isActiveIndex === 1}
          onClick={() => setIsActiveIndex(1)}
        >
          Semua Transaksi
        </SubMenuNav>
        <SubMenuNav
          isActive={isActiveIndex === 2}
          onClick={() => setIsActiveIndex(2)}
        >
          Menunggu Pembayaran
        </SubMenuNav>
        <SubMenuNav
          isActive={isActiveIndex === 3}
          onClick={() => setIsActiveIndex(3)}
        >
          Transaksi Gagal
        </SubMenuNav>
        <SubMenuNav
          isActive={isActiveIndex === 4}
          onClick={() => setIsActiveIndex(4)}
        >
          Transaksi Sukses
        </SubMenuNav>
      </div>
      <div className="py-4">
        {isActiveIndex === 1 && (
          <>
            {data === undefined || data.length === 0 ? (
              <p>Tidak memiliki riwayat transaksi</p>
            ) : (
              <ul>
                {data.map((item) => {
                  return (
                    <li className="pb-2" key={item.id}>
                      <p>
                        {item.title} - <span>Rp. {item.price} - </span>
                        <span>{item.updatedAt?.toLocaleString()} - </span>
                        <span>{item.status}</span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
        {isActiveIndex === 2 && (
          <>
            {transactionList == undefined || transactionList?.length == 0 ? (
              <p>Tidak memiliki transaksi yang perlu dibayar</p>
            ) : (
              <ul>
                {transactionList.map((item) => {
                  return (
                    <li className="pb-2" key={item.id}>
                      <p>
                        {item.title} - <span>Rp. {item.price} - </span>
                        <span>{item.updatedAt?.toLocaleString()}</span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
        {isActiveIndex === 3 && (
          <>
            {transactionList == undefined || transactionList?.length == 0 ? (
              <p>Tidak memiliki transaksi gagal</p>
            ) : (
              <ul>
                {transactionList.map((item) => {
                  return (
                    <li className="pb-2" key={item.id}>
                      <p>
                        {item.title} - <span>Rp. {item.price} - </span>
                        <span>{item.updatedAt?.toLocaleString()}</span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
        {isActiveIndex === 4 && (
          <>
            {transactionList == undefined || transactionList?.length == 0 ? (
              <p>Tidak memiliki transaksi sukses</p>
            ) : (
              <ul>
                {transactionList.map((item) => {
                  return (
                    <li className="pb-2" key={item.id}>
                      <p>
                        {item.title} - <span>Rp. {item.price} - </span>
                        <span>{item.updatedAt?.toLocaleString()}</span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </div>
    </>
  );
}
