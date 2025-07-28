import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const cloudName = "daznks9gy";
  const folderPath = "Estefania Bustamante/hero-shots";
  
  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        // Using Cloudinary's search API to get images from the hero-shots folder
        const response = await fetch(
          `https://res.cloudinary.com/${cloudName}/image/list/${encodeURIComponent(folderPath)}.json`
        );
        
        if (response.ok) {
          const data = await response.json();
          const imageUrls = data.resources.map((resource, index) => ({
            id: index + 1,
            url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${resource.public_id}`,
            alt: `Estefania's interior design showcase ${index + 1}`
          }));
          setHeroImages(imageUrls);
        } else {
          // Fallback to manual list if API doesn't work
          console.log("Using fallback hero images");
          const fallbackImages = [
            { id: 1, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-1.jpeg`, alt: "Estefania's interior design showcase 1" },
            { id: 2, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-2.jpeg`, alt: "Estefania's interior design showcase 2" },
            { id: 3, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-3.jpeg`, alt: "Estefania's interior design showcase 3" },
            { id: 4, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-4.jpeg`, alt: "Estefania's interior design showcase 4" },
            { id: 5, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-5.jpeg`, alt: "Estefania's interior design showcase 5" }
          ];
          setHeroImages(fallbackImages);
        }
      } catch (error) {
        console.error("Error fetching hero images:", error);
        // Fallback images
        const fallbackImages = [
          { id: 1, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-1.jpeg`, alt: "Estefania's interior design showcase 1" },
          { id: 2, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-2.jpeg`, alt: "Estefania's interior design showcase 2" },
          { id: 3, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-3.jpeg`, alt: "Estefania's interior design showcase 3" },
          { id: 4, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-4.jpeg`, alt: "Estefania's interior design showcase 4" },
          { id: 5, url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/Estefania-Bustamante/hero-shots/home-page-5.jpeg`, alt: "Estefania's interior design showcase 5" }
        ];
        setHeroImages(fallbackImages);
      } finally {
        setLoading(false);
      }
    };
    
    fetchHeroImages();
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {loading ? (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Loading...</span>
            </div>
          ) : (
            heroImages.map((image, index) => (
            <img 
              key={image.id}
              src={image.url}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
                index === 0 ? 'animate-slideshow-1' : 
                index === 1 ? 'animate-slideshow-2' : 
                index === 2 ? 'animate-slideshow-3' : 
                index === 3 ? 'animate-slideshow-4' : 
                'animate-slideshow-5'
              }`}
              onError={(e) => {
                console.error(`Failed to load hero image: ${image.url}`);
              }}
            />
          ))
          )}
        </div>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-[10vh]">
          <div className="text-center text-white">
            <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] transform scale-y-[0.7]">
              ESTEFANIA INTERIORS
            </h1>
            <div className="flex items-center justify-center mt-4 mb-4">
              <div className="w-16 h-px bg-white"></div>
              <a href="/portfolio" className="mx-4 text-sm tracking-[0.2em] font-light transform scale-y-[0.7] hover:opacity-80 transition-opacity cursor-pointer">
              <Link to="/interiors" className="mx-4 text-sm tracking-[0.2em] font-light transform scale-y-[0.7] hover:opacity-80 transition-opacity cursor-pointer">
                WELCOME
              </Link>
              </a>
              <div className="w-16 h-px bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;