import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    const formData = new FormData(form.current);
    setUserName(formData.get('user_name') as string);

    emailjs.sendForm(
      'service_cprkavj',
      'template_y3kbtxc',
      form.current,
      '_ruNnY_znyUlyRH36'
    )
      .then(() => {
        setSubmitted(true);
        toast.success('Message sent successfully!');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="py-16 bg-gray-800">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our services or to discuss
            your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-8">
                <h2 className="text-2xl font-bold text-white mb-4">Thank You, {userName}!</h2>
                <p className="text-gray-300 text-lg">
                  We appreciate you reaching out to us. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="user_phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="user_phone"
                      name="user_phone"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-900 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-4" size={24} />
                  <div>
                    <h3 className="font-medium text-white">Address</h3>
                    <p className="text-gray-300">Ruiru, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-4" size={24} />
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-gray-300">
                      <a href="tel:+254796907752" className="hover:text-blue-400">+254 796 907 752</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={24} />
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:vchris845@gmail.com" className="hover:text-blue-400">vchris845@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-blue-400 mr-4" size={24} />
                  <div>
                    <h3 className="font-medium text-white">Working Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Professional and experienced team</li>
                <li>✓ Quality workmanship guaranteed</li>
                <li>✓ Competitive pricing</li>
                <li>✓ Timely project completion</li>
                <li>✓ Excellent customer service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;