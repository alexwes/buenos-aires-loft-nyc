import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const Artworks = () => {
  // Placeholder for artwork images - you can replace these with actual uploaded images
  const artworks = [
    {
      id: 1,
      title: "Abstract Composition I",
      medium: "Oil on Canvas",
      dimensions: "36\" x 48\"",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Urban Landscape",
      medium: "Mixed Media",
      dimensions: "24\" x 36\"",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Color Study in Blue",
      medium: "Acrylic on Canvas",
      dimensions: "30\" x 40\"",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 4,
      title: "Geometric Harmony",
      medium: "Digital Print",
      dimensions: "20\" x 30\"",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 5,
      title: "Textural Exploration",
      medium: "Mixed Media on Board",
      dimensions: "18\" x 24\"",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 6,
      title: "Light and Shadow",
      medium: "Charcoal and Pastel",
      dimensions: "16\" x 20\"",
      image: "/placeholder.svg", // Replace with actual image path
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Standard Header */}
      <Header />

      {/* Header */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Art Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated selection of original artworks that explore color, form, and emotion. 
            Each piece is created with intention, designed to enhance and complement 
            the spaces they inhabit while standing as independent works of art.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-foreground mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {artwork.medium}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {artwork.dimensions}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Art Consultation Section */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Art Consultation Services
          </h2>
          <p className="text-muted-foreground mb-8">
            Looking for the perfect piece for your space? I offer personalized art consultation 
            to help you find or commission artwork that speaks to your vision.
          </p>
          <a
            href="mailto:art@estefaniabustamante.com"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Artworks;