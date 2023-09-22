import SubMenuNav from "@/components/molecules/Profile/SubMenuNav";
import React, { useState, useEffect } from "react";

type Props = {
  data?: Subscription[];
};

export default function Subscription(props: Props) {
  const { data } = props;
  const [isActiveIndex, setIsActiveIndex] = useState(1);
  const [subscriptionList, setSubscriptionList] = useState<Subscription[]>();

  const subscriptionTypeList = (index: number) => {
    const date = new Date();

    if (data && index === 1) {
      const result = data.filter((item) => new Date(item.expiry_date) >= date);
      setSubscriptionList(result);
    }

    if (data && index === 2) {
      const result = data.filter((item) => new Date(item.expiry_date) < date);
      setSubscriptionList(result);
    }
  };

  useEffect(() => {
    subscriptionTypeList(isActiveIndex);
  }, [isActiveIndex]);

  return (
    <>
      <h1 className="text-center mb-16">Paket Langganan Pengguna</h1>
      <div className="grid grid-cols-2">
        <SubMenuNav
          isActive={isActiveIndex === 1}
          onClick={() => setIsActiveIndex(1)}
        >
          Aktif
        </SubMenuNav>
        <SubMenuNav
          isActive={isActiveIndex === 2}
          onClick={() => setIsActiveIndex(2)}
        >
          Kadaluarsa
        </SubMenuNav>
      </div>
      <div className="py-4">
        {isActiveIndex === 1 && (
          <>
            {subscriptionList === undefined || subscriptionList.length === 0 ? (
              <p>Tidak memiliki langganan aktif</p>
            ) : (
              <ul>
                {subscriptionList.map((item) => {
                  return (
                    <li className="pb-2" key={item.id}>
                      <p>
                        {item.title} -{" "}
                        <span>{item.expiry_date.toString()}</span>
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
            {subscriptionList === undefined || subscriptionList.length === 0 ? (
              <p>Tidak memiliki langganan kadaluarsa</p>
            ) : (
              <ul>
                {subscriptionList.map((item) => {
                  return (
                    <li className="pb-2" key={item.id}>
                      <p>
                        {item.title} -{" "}
                        <span>{item.expiry_date.toString()}</span>
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
