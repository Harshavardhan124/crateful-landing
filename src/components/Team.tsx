import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { AnimatedSection } from './AnimationProvider';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {/* <div className="flex space-x-3">
          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Rahul",
      role: "CEO & Co-founder",
      description: "Provides visionary leadership across all facets of the business, from strategy to execution. Focused on building scalable logistics and warehousing solutions that drive efficiency, innovation, and long-term growth.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Avinaash",
      role: "CTO & Co-founder",
      description: "Leads technology strategy and product development with a focus on solving complex logistics and warehousing challenges. Drives innovation through scalable systems, automation, and data-driven decision-making.",
      image: "https://images.pexels.com/photos/6205505/pexels-photo-6205505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Harsha",
      role: "CBO & Co-founder",
      description: "Brings together business acumen and technology expertise to drive strategic growth in logistics and warehousing. Focused on forging partnerships and scaling tech-enabled solutions that solve real-world supply chain challenges.",
      image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Nikhil",
      role: "COO & Co-founder",
      description: "Combines operational leadership with deep data science expertise to drive efficiency and intelligence across logistics and warehousing. Focused on building scalable systems through data-driven process optimization and informed decision-making.",
      image: "/assets/team/Nikhil.jpg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary-600 font-semibold uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet the Founders</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team of logistics and technology experts is committed to revolutionizing the warehousing and fulfillment industry.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index}>
              <TeamMember {...member} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;