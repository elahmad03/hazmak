import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Services from './Services';

const Showcase = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-4">
          Welcome to <span className="text-orange-600">Hazmak Industries</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          We build, supply, and innovate — from construction to food processing and general contracts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 bg-orange-600 text-white rounded shadow hover:bg-orange-700 transition cursor-pointer"
          >
            Our Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 border border-orange-600 text-orange-600 rounded hover:bg-orange-50 dark:hover:bg-gray-700 transition cursor-pointer"
          >
            Get in Touch
          </ScrollLink>
        </div>
      </motion.div>
    </main>
  );
};

export default Showcase;
