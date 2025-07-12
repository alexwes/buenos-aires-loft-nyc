import Header from "@/components/Header";
import { Mail, Phone, MapPin } from "lucide-react";

const Artworks = () => {
  const artworks = [
    { id: 1, image: "images/artwork1.PNG", artist: "HILARY", alt: "artwork 1" },
    { id: 2, image: "images/artwork5.PNG", artist: "MARIA", alt: "artwork 5" },
    { id: 3, image: "images/artwork6.PNG", artist: "LEON", alt: "artwork 6" },
    { id: 4, image: "images/artwork7.PNG", artist: "HORACIO", alt: "artwork 7" },
    { id: 5, image: "images/bancalari.JPG", artist: "INES", alt: "bancalari" },
    { id: 6, image: "images/flowers.PNG", artist: "GABRIELA", alt: "flowers" },
    { id: 7, image: "images/artwork4.PNG", artist: "REMY", alt: "artwork 4" },
    { id: 8, image: "images/artwork8.PNG", artist: "RACHEL", alt: "artwork 8" },
    { id: 9, image: "images/artwork9.JPG", artist: "YEZICA", alt: "artwork 9" },
    { id: 10, image: "images/new-red.jpg", artist: "MILES", alt: "red painting" },
    { id: 11, image: "images/artwork12.jpg", artist: "JANE", alt: "artwork 12" },
    { id: 12, image: "images/artwork11.JPG", artist: "YEZICA", alt: "artwork 11" },
    { id: 13, image: "images/artwork13.jpg", artist: "JESUS", alt: "artwork 13" },
    { id: 14, image: "images/artwork14.jpg", artist: "LEONHARD", alt: "artwork 14" },
    { id: 15, image: "images/artwork15.jpg", artist: "ALEJANDRA", alt: "artwork 15" },
    { id: 16, image: "images/artwork17.jpg", artist: "GUSTAVO", alt: "artwork 17" },
    { id: 17, image: "images/puma.jpg", artist: "GABRIELA", alt: "puma" },
    { id: 18, image: "images/artwork16.jpg", artist: "MILES", alt: "artwork 16" },
    { id: 19, image: "images/video-adj.jpg", artist: "MARIA", alt: "MARIA" },
    { id: 20, image: "images/video-adj2.jpg", artist: "MARIA", alt: "MARIA" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Standard Header */}
      <Header />

      {/* Header */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Artworks
          </h1>
          <p className="text-lg text-muted-foreground">
            Page under construction 🚧
          </p>
        </div>
      </section>

      {/* Artworks Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-square relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-2xl font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {artwork.artist}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Video Section */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-square relative bg-black flex items-center justify-center">
                <video 
                  controls 
                  className="max-w-full max-h-full"
                  poster="images/video-adj.jpg"
                >
                  <source src="video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 text-white text-lg font-light tracking-wider">
                  MARIA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <Mail className="h-5 w-5" />
              <a href="mailto:art@estefaniabustamante.com" className="hover:text-gray-300 transition-colors">
                art@estefaniabustamante.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Phone className="h-5 w-5" />
              <a href="tel:+16313538924" className="hover:text-gray-300 transition-colors">
                +1 (631) 353-8924
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="h-5 w-5" />
              <span>New York, NY</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <a href="https://instagram.com/estefania.interiors" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                @estefania.interiors
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Artworks;