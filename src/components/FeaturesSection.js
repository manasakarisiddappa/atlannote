import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Fast and Efficient",
    description:
      "Acme Note is optimized for speed and efficiency, allowing you to take notes quickly and effortlessly.",
    icon: "⚡",
  },
  {
    title: "Cloud Sync",
    description:
      "Your notes are automatically synced to the cloud, so you can access them from any device, anywhere.",
    icon: "☁️",
  },
  {
    title: "Secure",
    description:
      "We take security seriously. Your notes are encrypted and only you have access to them.",
    icon: "🔒",
  },
];

const Features = () => {
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
    <section id="features" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Discover what makes Acme Note the best note-taking application.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <div key={feature.title} className="pt-6">
              <div className="flow-root bg-white rounded-lg px-4 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <span className="text-white text-3xl">
                        {feature.icon}
                      </span>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
