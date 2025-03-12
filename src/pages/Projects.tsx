import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Modern Mansion Design',
    category: 'Residential',
    location: 'Oaklands, Ruiru',
    images: [
      '/images/projects/1.jpg',
      '/images/projects/2.jpg',
      '/images/projects/3.jpg',
      '/images/projects/4.jpg',
      '/images/projects/5.jpg',
      '/images/projects/6.jpg',
      '/images/projects/7.jpg',
      '/images/projects/8.jpg',
      '/images/projects/9.jpg',
      '/images/projects/10.jpg',
      '/images/projects/11.jpg',
      '/images/projects/12.jpg',
      '/images/projects/13.jpg',
      '/images/projects/14.jpg',
      '/images/projects/15.jpg',
      '/images/projects/16.jpg',
      '/images/projects/17.jpg',
      '/images/projects/18.jpg'
    ]
  },
  {
    title: 'Luxury Residential Development',
    category: 'Residential',
    location: 'Karen',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687534-baa4b7e41b9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  }
  
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentSlides, setCurrentSlides] = useState<{ [key: number]: number }>({});

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index);
    if (!currentSlides[index]) {
      setCurrentSlides({ ...currentSlides, [index]: 0 });
    }
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  useEffect(() => {
    if (hoveredProject !== null) {
      const timer = setInterval(() => {
        setCurrentSlides(prev => ({
          ...prev,
          [hoveredProject]: (prev[hoveredProject] + 1) % projects[hoveredProject].images.length
        }));
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [hoveredProject]);

  return (
    <div className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise
            in construction and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ 
                height: hoveredProject === index ? '600px' : '400px',
                transform: hoveredProject === index ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              {project.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlides[index] === imgIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${project.title} - Image ${imgIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-lg text-gray-200 mb-1">{project.category}</p>
                <p className="text-lg text-gray-300">{project.location}</p>
                {hoveredProject === index && (
                  <div className="mt-4 flex gap-2">
                    {project.images.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlides[index] === dotIndex ? 'bg-blue-400 w-4' : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">
            Interested in starting your own project? Let's discuss how we can bring your vision to life.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;