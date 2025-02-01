// src/components/HowItWorks.js
const HowItWorks = () => {
    const steps = [
      {
        icon: "📤",
        title: "Upload",
        description: "Drag and drop your document.",
      },
      {
        icon: "🤖",
        title: "Process",
        description: "AI extracts and organizes the data.",
      },
      {
        icon: "📥",
        title: "Export",
        description: "Download or sync to your favorite tools.",
      },
    ];
  
    return (
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;