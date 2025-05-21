import React from 'react';
import whiteLogo from '../../assets/white-logo.svg';
import { Package2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center mb-4">
              {/* <Package2 className="h-8 w-8 text-primary-400 mr-2" />
              <span className="text-2xl font-bold text-white">Crateful</span> */}
              <img src={whiteLogo} alt="Crateful Logo" className="h-[3rem] w-[9rem] text-primary-400 mr-2" />
            </div>
            <p className="text-gray-400 mb-6">
              Premium logistics, warehousing, and fulfillment services to meet your business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "6-Hour Express Delivery",
                "24-Hour Delivery",
                "Standard Delivery",
                "Warehousing",
                "Fulfillment",
                "Inventory Management",
                "Distribution"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "News & Blog",
                "Case Studies",
                "Sustainability",
                "Partners"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mt-1 mr-3" />
                <span className="text-gray-400">info@crateful.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mt-1 mr-3" />
                <span className="text-gray-400">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 mr-3" />
                <span className="text-gray-400">
                  123 Logistics Way<br />
                  Warehouse District<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {year} Crateful Logistics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;