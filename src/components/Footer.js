// src/components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AutoDocParser. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
            <a href="#" className="mx-2 hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;