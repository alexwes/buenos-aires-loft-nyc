import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const Interiors = () => {
  // Placeholder for interior design images - you can replace these with actual uploaded images
  const interiorProjects = [
    {
      id: 1,
      title: "Modern Living Space",
      description: "Contemporary design with warm accents",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Elegant Bedroom Suite",
      description: "Sophisticated comfort and style",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Luxury Kitchen Design",
      description: "Functional beauty for culinary excellence",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 4,
      title: "Artistic Dining Room",
      description: "Where art meets everyday living",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 5,
      title: "Serene Home Office",
      description: "Productivity in a peaceful environment",
      image: "/placeholder.svg", // Replace with actual image path
    },
    {
      id: 6,
      title: "Cozy Reading Nook",
      description: "A perfect retreat for quiet moments",
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
            Interior Design
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creating sophisticated spaces that blend functionality with timeless beauty. 
            Each project is a unique collaboration, reflecting the client's personality 
            while maintaining the highest standards of design excellence.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <a
            href="mailto:art@estefaniabustamante.com"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Interiors;