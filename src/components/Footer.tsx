import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                <span>Ruiru, Kenya</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={20} />
                <a href="tel:+254796907752" className="hover:text-blue-400">+254 796 907 752</a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={20} />
                <a href="mailto:vchris845@gmail.com" className="hover:text-blue-400">vchris845@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="hover:text-blue-400">Products</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
            <p className="text-gray-400">
              Tanz Designs and Constructions is committed to excellence in construction
              and design, delivering innovative solutions that transform spaces and exceed
              expectations.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Tanz Designs and Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer