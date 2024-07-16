import { motion } from "framer-motion";

const features = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1515606378517-3451a4fa2e12?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
    text: "Make money by your notes",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
    text: "AI guidance for creating notes is supported",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlciLWRkwkAxuV6OZZPKR-eOFIYmViMd3cQ&s",
    text: "Free trial for 3 months",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1671069848075-c9faefe4df18?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image path
    text: "Access notes of top students in last-minute preparation",
  },
];

const AddtionalFeatures = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Discover What We Offer
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  className="h-48 w-full object-cover"
                  src={feature.imgSrc}
                  alt={feature.text}
                />
                <div className="mt-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {feature.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtionalFeatures;
