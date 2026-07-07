import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      storage: "10GB",
      emails: 10,
      domains: 10,
      price: 10,
      active: false,
    },
    {
      name: "Pro",
      storage: "25GB",
      emails: 25,
      domains: 25,
      price: 25,
      active: true,
    },
    {
      name: "Premium",
      storage: "50GB",
      emails: 50,
      domains: 50,
      price: 50,
      active: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-gray-600 py-24 px-6 text-center"
    >
      <div className="text-center text-white mb-20">
        <h2 className="text-2xl mb-4">PRICING</h2>
        <p className="">Choose a pricing plan that fits your needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white"
          >
            {/* Header */}
            <div
              className={`py-10 text-white text-3xl ${
                plan.active ? "bg-red-500" : "bg-black"
              }`}
            >
              {plan.name}
            </div>

            {/* Body */}
            <div className="border-b py-5">
              <span className="font-bold">{plan.storage}</span> Storage
            </div>

            <div className="border-b py-5">
              <span className="font-bold">{plan.emails}</span> Emails
            </div>

            <div className="border-b py-5">
              <span className="font-bold">{plan.domains}</span> Domains
            </div>

            <div className="border-b py-5">
              <span className="font-bold">Endless</span> Support
            </div>

            <div className="py-8 border-b">
              <h3 className="text-5xl mb-3">${plan.price}</h3>

              <p className="text-gray-500">per month</p>
            </div>

            <div className="bg-gray-100 py-6">
              <button className="bg-black text-white px-8 py-3 hover:bg-gray-300 hover:text-black duration-300 cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}