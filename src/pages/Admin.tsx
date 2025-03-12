import { useState } from 'react';
import { Building2, Users, Image, Mail } from 'lucide-react';

interface ContentSection {
  title: string;
  content: string;
  images?: string[];
}

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState<string>('services');
  const [sections, setSections] = useState<{ [key: string]: ContentSection[] }>({
    services: [
      {
        title: 'Architectural Design',
        content: 'Custom architectural designs that blend aesthetics with functionality.',
        images: [
          'https://images.unsplash.com/photo-1545350724-b1c9883ef888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
      }
    ],
    projects: [
      {
        title: 'Modern Office Complex',
        content: 'A state-of-the-art office complex in Nairobi CBD.',
        images: [
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
      }
    ]
  });

  const handleUpdateSection = (sectionKey: string, index: number, field: string, value: string) => {
    setSections(prev => ({
      ...prev,
      [sectionKey]: prev[sectionKey].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleAddImage = (sectionKey: string, index: number) => {
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      setSections(prev => ({
        ...prev,
        [sectionKey]: prev[sectionKey].map((item, i) => 
          i === index ? { ...item, images: [...(item.images || []), imageUrl] } : item
        )
      }));
    }
  };

  const handleAddSection = (sectionKey: string) => {
    setSections(prev => ({
      ...prev,
      [sectionKey]: [
        ...prev[sectionKey],
        {
          title: 'New Section',
          content: 'Enter content here',
          images: []
        }
      ]
    }));
  };

  const handleDeleteSection = (sectionKey: string, index: number) => {
    if (confirm('Are you sure you want to delete this section?')) {
      setSections(prev => ({
        ...prev,
        [sectionKey]: prev[sectionKey].filter((_, i) => i !== index)
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setSelectedSection('services')}
            className={`p-4 rounded-lg flex items-center gap-2 ${
              selectedSection === 'services' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            <Building2 size={24} />
            Services
          </button>
          <button
            onClick={() => setSelectedSection('projects')}
            className={`p-4 rounded-lg flex items-center gap-2 ${
              selectedSection === 'projects' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            <Users size={24} />
            Projects
          </button>
          <button
            onClick={() => setSelectedSection('gallery')}
            className={`p-4 rounded-lg flex items-center gap-2 ${
              selectedSection === 'gallery' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            <Image size={24} />
            Gallery
          </button>
          <button
            onClick={() => setSelectedSection('messages')}
            className={`p-4 rounded-lg flex items-center gap-2 ${
              selectedSection === 'messages' ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            <Mail size={24} />
            Messages
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold capitalize">{selectedSection}</h2>
            <button
              onClick={() => handleAddSection(selectedSection)}
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add New
            </button>
          </div>

          <div className="space-y-6">
            {sections[selectedSection]?.map((section, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) => handleUpdateSection(selectedSection, index, 'title', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-600 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Content</label>
                    <textarea
                      value={section.content}
                      onChange={(e) => handleUpdateSection(selectedSection, index, 'content', e.target.value)}
                      className="w-full px-4 py-2 bg-gray-600 rounded-md h-32"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Images</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {section.images?.map((image, imgIndex) => (
                        <div key={imgIndex} className="relative group">
                          <img
                            src={image}
                            alt={`${section.title} ${imgIndex + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => {
                              const newImages = section.images?.filter((_, i) => i !== imgIndex);
                              handleUpdateSection(selectedSection, index, 'images', newImages);
                            }}
                            className="absolute top-2 right-2 bg-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => handleAddImage(selectedSection, index)}
                        className="w-full h-32 border-2 border-dashed border-gray-500 rounded-lg flex items-center justify-center hover:border-blue-500 transition-colors"
                      >
                        Add Image
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleDeleteSection(selectedSection, index)}
                    className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;