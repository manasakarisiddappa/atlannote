import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    title: "Free Trail",
    price: "$0 for 3 months",
    features: [
      "Unlimited access",
      "Already 3k+ users have registered",
      "3 months access to all the features",
    ],
    gradient: "from-blue-500 to-blue-300",
  },
  {
    title: "Basic Plan",
    price: "$0.5/per day",
    features: ["Unlimited notes", "Access from any device", "Basic support"],
    gradient: "from-blue-500 to-blue-300",
  },
  {
    title: "Pro Plan",
    price: "$5/month",
    features: [
      "Everything in Basic",
      "Priority support",
      "Cloud sync",
      "Custom tags and folders",
    ],
    gradient: "from-blue-500 to-blue-300",
  },
];

const Pricing = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });
  }

  return (
    <section id="pricing" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl ">
            Pricing
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Choose the plan that is right for you.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <div key={plan.title} className="pt-6 ">
              <div
                className={`flow-root bg-gradient-to-r ${plan.gradient} rounded-lg px-6 pb-8 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out`}
              >
                <div className="mt-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-medium text-white tracking-tight">
                      {plan.title}
                    </h3>
                    <p className="mt-4 text-3xl font-bold text-white">
                      {plan.price}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-white flex items-start">
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-3">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-center">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-lg font-medium shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    // <section className="bg-gray-200 py-16">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-3xl font-semibold text-center mb-8">Pricing</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {plans.map((plan) => (
    //         <motion.div
    //           key={plan.id}
    //           className="bg-white rounded-lg shadow-lg p-6 text-center"
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //         >
    //           <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
    //           <p className="text-3xl font-bold mb-4">{plan.price}</p>
    //           <ul className="text-left mb-4">
    //             {plan.features.map((feature, index) => (
    //               <li key={index} className="mb-2">
    //                 <span className="mr-2">&#8226;</span>
    //                 {feature}
    //               </li>
    //             ))}
    //           </ul>
    //           <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
    //             Choose Plan
    //           </button>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Pricing;
