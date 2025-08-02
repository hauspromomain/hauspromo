
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMerchClick = () => {
    alert("Coming Soon! 🚀\n\nOur exclusive Hauspromo merchandise collection is currently in development. Stay tuned for amazing branded items!");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Hauspromo
            </h3>
            <p className="text-gray-300 mb-6">
              Maximizing your online and offline presence with comprehensive marketing solutions across all industries. From tech startups to established brands, we drive real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Digital Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Influencer Campaigns</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Celebrity Onboarding</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Creator Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">WhatsApp/Telegram</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Banner Advertising</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Offline Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Public Transport Ads</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hoardings & Posters</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Event Activation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Retail Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={handleMerchClick}
                  className="hover:text-blue-400 transition-colors"
                >
                  Merchandise
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate("/visa-consultation")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Visa Consultation
                </button>
              </li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Hauspromo. All rights reserved.
            </p>
            <p className="text-gray-400 mt-4 md:mt-0">
              Designed with ❤️ for your success
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
