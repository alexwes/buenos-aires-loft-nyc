import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const Interiors = () => {
  const githubBaseUrl = "https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public";
  
  // Programmatically organized interior projects by location
  const interiorProjects = [
    // UES-1 Project
    {
      id: 1,
      image: `${githubBaseUrl}/images/interiors/UES-1/bed-after-1.jpg`,
      alt: "UES-1 bedroom after renovation",
      location: "UES-1"
    },
    {
      id: 2,
      image: `${githubBaseUrl}/images/interiors/UES-1/bed-before-1.jpg`,
      alt: "UES-1 bedroom before renovation",
      location: "UES-1"
    },
    {
      id: 3,
      image: `${githubBaseUrl}/images/interiors/UES-1/entrance-1.jpeg`,
      alt: "UES-1 entrance",
      location: "UES-1"
    },
    {
      id: 4,
      image: `${githubBaseUrl}/images/interiors/UES-1/kitch-aft.jpg`,
      alt: "UES-1 kitchen after renovation",
      location: "UES-1"
    },
    {
      id: 5,
      image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-1.jpeg`,
      alt: "UES-1 kitchen view 1",
      location: "UES-1"
    },
    {
      id: 6,
      image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-2.jpeg`,
      alt: "UES-1 kitchen view 2",
      location: "UES-1"
    },
    {
      id: 7,
      image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-3.jpeg`,
      alt: "UES-1 kitchen view 3",
      location: "UES-1"
    },
    {
      id: 8,
      image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-4.jpeg`,
      alt: "UES-1 kitchen view 4",
      location: "UES-1"
    },
    {
      id: 9,
      image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-after-1.jpeg`,
      alt: "UES-1 kitchen after renovation",
      location: "UES-1"
    },
    {
      id: 10,
      image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-before-1.jpg`,
      alt: "UES-1 kitchen before renovation",
      location: "UES-1"
    },
    {
      id: 11,
      image: `${githubBaseUrl}/images/interiors/UES-1/living-1.jpeg`,
      alt: "UES-1 living room",
      location: "UES-1"
    },
    {
      id: 12,
      image: `${githubBaseUrl}/images/interiors/UES-1/living-1.JPG`,
      alt: "UES-1 living room view",
      location: "UES-1"
    },
    {
      id: 13,
      image: `${githubBaseUrl}/images/interiors/UES-1/living-after-1.jpg`,
      alt: "UES-1 living room after renovation",
      location: "UES-1"
    },
    {
      id: 14,
      image: `${githubBaseUrl}/images/interiors/UES-1/living-before-1.jpg`,
      alt: "UES-1 living room before renovation",
      location: "UES-1"
    },
    
    // UES-2 Project
    {
      id: 15,
      image: `${githubBaseUrl}/images/interiors/UES-2/dining-1.jpeg`,
      alt: "UES-2 dining room",
      location: "UES-2"
    },
    {
      id: 16,
      image: `${githubBaseUrl}/images/interiors/UES-2/living-2.JPG`,
      alt: "UES-2 living room",
      location: "UES-2"
    },
    
    // Brooklyn Project
    {
      id: 17,
      image: `${githubBaseUrl}/images/interiors/Brooklyn/bed-1.jpg`,
      alt: "Brooklyn bedroom",
      location: "Brooklyn"
    },
    
    // Buenos Aires Project
    {
      id: 18,
      image: `${githubBaseUrl}/images/interiors/Buenos Aires/living-1.png`,
      alt: "Buenos Aires living room",
      location: "Buenos Aires"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Standard Header */}
      <Header />

      {/* Header */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
            Interiors
          </h1>
        </div>
      </section>

      {/* Interiors Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                    <div className="text-white text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      {project.location.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interiors;