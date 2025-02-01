// src/components/FAQ.js
const FAQ = () => {
    const faqs = [
      {
        question: "How accurate is AutoDocParser?",
        answer: "AutoDocParser uses AI-powered OCR with 99%+ accuracy for typed text.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel anytime with no hidden fees.",
      },
    ];
  
    return (
      <section id="faq" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;