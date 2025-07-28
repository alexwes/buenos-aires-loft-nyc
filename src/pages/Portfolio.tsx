import Header from "../components/Header";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content Area */}
      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Portfolio Grid - Placeholder for now */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This will be populated with actual content later */}
            <div className="text-center text-muted-foreground py-20">
              Portfolio content will be added here
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;