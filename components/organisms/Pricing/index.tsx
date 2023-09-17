import { useState, useEffect } from "react";
import CardPricing from "@/components/molecules/CardPricing";
import { getAllPricing } from "@/services/pricing.services";

export default function index() {
  const [data, setData] = useState([] as PricingList[]);

  const pricing = async () => {
    const result = await getAllPricing();
    if (result.data) {
      setData(result.data);
    }
  };

  useEffect(() => {
    pricing();
  }, []);

  console.log(data);

  return (
    <>
      <div
        id="pricing"
        className=" cards-2 relative pt-20 bg-cover text-center"
      >
        <div className="absolute bottom-0 w-full h-40 bg-white"></div>
        <div className="container px-4 pb-px sm:px-8">
          <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">
            Pilihan Paket Berlangganan
          </h2>
          <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
            Kami mempunyai berbagai paket yang bisa menjadi pilihan anda. Pilih
            paket premium favoritmu. Unduh dan baca sepuasnya tanpa henti.
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:flex-wrap lg:gap-12">
            {Object.keys(data).length > 0 &&
              data.map((item) => (
                <div key={item.id}>
                  <CardPricing {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
