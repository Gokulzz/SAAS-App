// src/components/Testimonials.js
const Testimonials = () => {
    const testimonials = [
      {
        quote: "AutoDocParser saved me 10+ hours a month on manual data entry. It’s a game-changer!",
        author: "Jane, Freelancer",
      },
      {
        quote: "The accuracy is incredible, and the export options make my accounting so much easier.",
        author: "John, Small Business Owner",
      },
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;