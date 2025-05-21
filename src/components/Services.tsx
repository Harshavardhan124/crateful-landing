import React from 'react';
import { Clock, TruckIcon, PackageCheck } from 'lucide-react';
import { AnimatedSection } from './AnimationProvider';

interface ServiceCardProps {
  head: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ head, title, description, icon, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] h-full flex flex-col">
      <div className="p-4 rounded-full bg-primary-50 inline-block mb-4 flex items-center justify-start">
        {icon}
        <h3 className="text-xl font-semibold text-primary-800 ml-3">{head}</h3>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <div className="mt-auto">
        <h4 className="text-sm font-semibold uppercase text-primary-600 mb-2">Features</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-500 mr-2 mt-1">•</span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      head: "Express",
      title: "6-Hour Delivery",
      description: "Ultra-fast delivery solution for urgent shipments within a 6-hour timeframe.",
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      features: [
        "Guaranteed 6-hour delivery window",
        "Real-time tracking and notifications",
        "Priority handling and dedicated courier",
        "Available for urban areas nationwide"
      ]
    },
    {
      head: "Priority",
      title: "24-Hour Delivery",
      description: "Reliable next-day delivery service for time-sensitive shipments.",
      icon: <TruckIcon className="h-8 w-8 text-primary-600" />,
      features: [
        "24-hour guaranteed delivery window",
        "Cost-effective urgent shipping solution",
        "Temperature-controlled options available",
        "Wider geographic coverage than express"
      ]
    },
    {
      head: "Standard",
      title: "2-5 Business Days",
      description: "Budget-friendly shipping with reliable and flexible delivery timelines.",
      icon: <PackageCheck className="h-8 w-8 text-primary-600" />,
      features: [
        "2-5 business days delivery timeframe",
        "Most economical shipping option",
        "Bulk shipment capabilities",
        "Comprehensive insurance coverage"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Delivery Solutions for Every Need</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From urgent shipments to cost-effective standard delivery, we have the perfect solution to meet your logistics requirements.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} className="">
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
          >
            Get a Custom Quote
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;