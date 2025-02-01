// src/components/Header.js
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AutoDocParser</h1>
        <nav>
          <a href="#features" className="mx-2 hover:underline">Features</a>
          <a href="#pricing" className="mx-2 hover:underline">Pricing</a>
          <a href="#faq" className="mx-2 hover:underline">FAQ</a>
          <button className="ml-4 bg-white text-blue-600 px-4 py-2 rounded flex items-center">
            <FaSignInAlt className="mr-2" /> Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;