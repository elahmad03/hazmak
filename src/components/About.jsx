import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">About Hazmak Industries</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Hazmak Industries is a multi-sector company specializing in construction, food processing, general contracting, and trading. Our goal is to deliver excellence and innovation in every sector we operate in.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-400">
            To lead with integrity, build with quality, and innovate across multiple sectors. We are committed to sustainable development, empowering communities, and exceeding client expectations.
          </p>
        </div>

        <img 
          src="/img/banner.png"
          alt="Construction site"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default About;
