import React from 'react';
import { CheckCircle, BarChart2, Building, Package } from 'lucide-react';
import { AnimatedSection } from './AnimationProvider';

const About: React.FC = () => {
  const stats = [
    { value: '98%', label: 'On-time Delivery' },
    { value: '15K+', label: 'Monthly Shipments' },
    { value: '23+', label: 'Warehouse Locations' },
    { value: '99.9%', label: 'Inventory Accuracy' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <AnimatedSection className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7706406/pexels-photo-7706406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern warehouse interior" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-5 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-500 rounded-full h-12 w-12 flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">23+ Warehouses</h3>
                    <p className="text-sm text-gray-600">Nationwide coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:w-1/2">
            <span className="text-primary-600 font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              End-to-End Warehousing & Fulfillment Excellence
            </h2>
            <p className="mt-6 text-gray-600">
              Crateful is a full-service logistics provider specializing in warehousing and fulfillment solutions. 
              We combine cutting-edge technology with strategic warehouse locations to ensure your products reach customers 
              quickly and efficiently.
            </p>
            <p className="mt-4 text-gray-600">
              Our state-of-the-art facilities are equipped with inventory management systems that provide real-time 
              visibility and control. We offer flexible solutions tailored to your business needs, whether you're 
              a small e-commerce startup or a large enterprise requiring complex supply chain management.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: <CheckCircle className="h-5 w-5 text-primary-600" />, text: "Smart Warehousing & Rapid Distribution" },
                { icon: <CheckCircle className="h-5 w-5 text-primary-600" />, text: "Analytics Platform" },
                { icon: <CheckCircle className="h-5 w-5 text-primary-600" />, text: "Batch and serial tracking" },
                { icon: <CheckCircle className="h-5 w-5 text-primary-600" />, text: "Advanced security protocols" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {item.icon}
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;