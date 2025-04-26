import { motion } from "framer-motion";
import {
  FaTruck,
  FaTools,
  FaSeedling,
  FaHandshake,
  FaStore,
} from "react-icons/fa";

const services = [
  {
    title: "Food Supply",
    description:
      "We provide fresh, packaged, and bulk food items with guaranteed quality and timely delivery.",
    icon: <FaTruck className="text-4xl text-orange-600" />,
  },
  {
    title: "Building Materials",
    description:
      "Supplying top-grade construction materials for residential, commercial, and industrial use.",
    icon: <FaTools className="text-4xl text-orange-600" />,
  },
  {
    title: "Farming & Food Processing",
    description:
      "From cultivation to processing, we ensure safe, sustainable, and efficient food systems.",
    icon: <FaSeedling className="text-4xl text-orange-600" />,
  },
  {
    title: "General Contract",
    description:
      "Managing diverse contracts across industries with integrity, speed, and quality control.",
    icon: <FaHandshake className="text-4xl text-orange-600" />,
  },
  {
    title: "Merchandise",
    description:
      "Offering retail and wholesale merchandise, from daily needs to specialized products.",
    icon: <FaStore className="text-4xl text-orange-600" />,
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Hazmak Industries operates across multiple sectors, providing
          high-quality products and services tailored to meet the needs of
          communities and enterprises.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
