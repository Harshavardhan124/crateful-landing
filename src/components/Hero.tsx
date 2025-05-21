import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, BarChart3, Package } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-primary-500/5 -z-10" />
      
      <div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500/10 -z-10"
        style={{ filter: 'blur(50px)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Logistics <span className="text-primary-600">Solutions</span> for Your Business
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Streamline your supply chain with Crateful's comprehensive warehousing and 
                fulfillment services. Fast, reliable, and efficient.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
                >
                  Get Quote
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Explore Services
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-12 grid grid-cols-4 gap-4"
            >
              {[
                { icon: <Truck className="h-6 w-6 text-primary-600" />, text: "Nationwide Coverage" },
                { icon: <Clock className="h-6 w-6 text-primary-600" />, text: "Fast Delivery" },
                { icon: <BarChart3 className="h-6 w-6 text-primary-600" />, text: "Real-time Tracking" },
                { icon: <Package className="h-6 w-6 text-primary-600" />, text: "Smart Warehousing" }
                // { icon: <ChartBar className="h-6 w-6 text-primary-600" />, text: "Analytics Platform" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-white p-3 rounded-full shadow-md mb-2">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Logistics warehouse" 
                className="rounded-lg shadow-xl object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Clock className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                    <p className="text-sm text-gray-600">Options as quick as 6 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;