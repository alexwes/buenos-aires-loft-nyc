import Header from "../components/Header";

const Art = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content Area */}
      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-muted-foreground py-20">
            <h1 className="text-2xl font-light">Art Page - Coming Soon</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Art;