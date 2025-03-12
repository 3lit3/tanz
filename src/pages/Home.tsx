import { useState, useEffect } from 'react';
import { ArrowRight, Building2, Users, Trophy, Clock } from 'lucide-react';

const slideImages = [ 
  '/logo.png',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section with Slideshow */}
      <section className="h-[600px] relative overflow-hidden">
        {slideImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">
              Designing Dreams,<br />Building Realities
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Transform your vision into reality with Tanz Designs and Constructions. 
              We bring innovation, quality, and excellence to every project.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Building2 className="mx-auto text-blue-400 mb-4" size={40} />
            <h3 className="text-4xl font-bold text-white mb-2">150+</h3>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto text-blue-400 mb-4" size={40} />
            <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-300">Team Members</p>
          </div>
          <div className="text-center">
            <Trophy className="mx-auto text-blue-400 mb-4" size={40} />
            <h3 className="text-4xl font-bold text-white mb-2">25+</h3>
            <p className="text-gray-300">Awards Won</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto text-blue-400 mb-4" size={40} />
            <h3 className="text-4xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Building Excellence Since 2014
              </h2>
              <p className="text-gray-300 mb-6">
                At Tanz Designs and Constructions, we combine innovative design with superior 
                construction practices to deliver exceptional results. Our commitment to quality 
                and attention to detail has made us a trusted name in the construction industry.
              </p>
              <p className="text-gray-300 mb-8">
                We specialize in both residential and commercial construction, offering comprehensive 
                services from initial design to final execution. Our team of experienced professionals 
                ensures that every project is completed to the highest standards.
              </p>
              <a 
                href="/about" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-[400px] overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Construction site" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[400px] overflow-hidden rounded-lg">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1682617326998-776d7443f02c?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Architecture design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;