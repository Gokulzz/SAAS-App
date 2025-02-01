// src/components/Pricing.js
const Pricing = () => {
    const plans = [
      {
        name: "Free",
        price: "$0",
        features: ["10 documents/month", "Basic support"],
      },
      {
        name: "Pro",
        price: "$20/month",
        features: ["100 documents/month", "Priority support"],
      },
      {
        name: "Business",
        price: "$50/month",
        features: ["Unlimited documents", "Dedicated support"],
      },
    ];
  
    return (
      <section id="pricing" className="bg-blue-50 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;