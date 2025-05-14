import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCart = ({ pricing }) => {
  const {name, price, description,features, interval} = pricing;
  return (
    <div className="border flex flex-col p-4 rounded-2xl mt-5">
      {/* {cart header} */}
      <div>
        <h1 className="text-5xl mt-3">{name}</h1>
        <h4 className="text-3xl">${price} / {interval}</h4>
      </div>
      {/* card body */}
      <div className="bg-indigo-600 flex-1 p-4 rounded-2xl mt-10">
        <p>{description}</p>
        {
            features.map((features, index) => <PricingFeatures key={index} features= {features}></PricingFeatures>)
        }
      </div>
      <button className="btn mt-3 border border-blue-700 bg-white text-xl font-medium text-blue-700 w-full">Subscribe</button>
    </div>
  );
};

export default PricingCart;
