import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Jane Doe",
    feedback:
      "Acme Note is an excellent resource for students who are struggling with a particular subject. The notes available are well-researched and comprehensive, providing students with all the information they need to succeed.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John Smith",
    feedback:
      "Acme Note has helped me immensely throughout my university studies. The notes available are incredibly detailed, and the formatting is clear and easy to follow. I highly recommend this website to anyone looking to improve their academic performance.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Johnson",
    feedback:
      "I first used Acme Notes while doing a very heavy course load one semester. The notes I downloaded were organised and concise, and saved me time. I would highly recommend Nexus and will use it again.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonials = () => {
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
    <section id="testimonials" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            See what our users are saying about Acme Note.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-4 pb-8">
                <div className="-mt-6 flex items-center justify-center">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {testimonial.feedback}
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

export default Testimonials;
