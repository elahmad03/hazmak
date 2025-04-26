import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-3">Hazmak Industries</h2>
          <p className="text-sm leading-relaxed max-w-md">
            Hazmak Industries is a multifaceted company delivering excellence across food supply, 
            building materials, farming, food processing, merchandise, and general contracts. We turn bold visions into real-world results.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex md:justify-end items-center gap-4">
          <a href="#" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition-transform">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-blue-400 hover:scale-110 transition-transform">
            <FaTwitter size={20} />
          </a>
          <a href="https://wa.me/+2348035954306" aria-label="WhatsApp" className="text-green-600 hover:scale-110 transition-transform">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="text-center text-sm text-gray-500 mt-6">
        Developed by <a href="https://wa.me/+2348164336141" className="text-green-600 font-semibold hover:underline">AhmadGlobe</a>
      </div>

      <div className="text-center text-sm text-gray-500 mt-2">
        © {new Date().getFullYear()} Hazmak Industries. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
