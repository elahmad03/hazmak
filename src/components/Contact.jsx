import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Get in touch with Hazmak Industries for business inquiries, support, or partnerships.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-orange-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+234 8035954306</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-orange-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>info@hazmak.com.ng</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-orange-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p>26 Njuwa Road, Yola, Adamawa, Nigeria</p>
            </div>
          </div>

          
        </div>

        </div>
    </section>
  );
};

export default Contact;
