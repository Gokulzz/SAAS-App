// src/components/Features.js
const Features = () => {
    const features = [
      {
        icon: "📄",
        title: "AI-Powered OCR",
        description: "Extract text and data from PDFs and images with 99%+ accuracy.",
      },
      {
        icon: "📊",
        title: "Structured Data",
        description: "Automatically organize data into fields like dates, amounts, and invoice numbers.",
      },
      {
        icon: "📤",
        title: "Export Options",
        description: "Export to CSV, Excel, or Google Sheets with one click.",
      },
    ];
  
    return (
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;