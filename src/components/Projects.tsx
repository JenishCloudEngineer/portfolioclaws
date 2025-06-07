import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Server, Globe, Zap, Shield } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AWS CI/CD Pipeline Setup",
      description: "Designed and implemented a basic CI/CD pipeline using AWS CodeDeploy, integrating S3 for storage and EC2 instances for deployment automation.",
      longDescription: "This project involved creating an end-to-end CI/CD pipeline that automates application deployment to EC2 instances. The pipeline reduces manual effort and improves release efficiency by automating the entire deployment process.",
      technologies: ["AWS CodeDeploy", "Amazon S3", "Amazon EC2", "AWS CLI"],
      category: "automation",
      icon: Zap,
      features: [
        "Automated deployment to EC2 instances",
        "S3 integration for artifact storage",
        "Reduced manual deployment effort",
        "Improved release efficiency"
      ]
    },
    {
      id: 2,
      title: "Website Hosting on EC2 with CloudFront",
      description: "Deployed a static website on AWS EC2 with CloudFront integration, improving global content access speed and reducing load times by up to 50%.",
      longDescription: "A comprehensive web hosting solution that combines EC2 for hosting with CloudFront for global content delivery. The project demonstrates proper configuration of AWS services for optimal performance and security.",
      technologies: ["Amazon EC2", "Amazon CloudFront", "AWS Route 53", "Security Groups"],
      category: "infrastructure",
      icon: Globe,
      features: [
        "Static website deployment on EC2",
        "CloudFront CDN integration",
        "50% improvement in load times",
        "Global content delivery optimization"
      ]
    },
    {
      id: 3,
      title: "Network Security Implementation",
      description: "Implemented comprehensive network segmentation using VPC, subnets, and route tables to enhance security and isolate sensitive data.",
      longDescription: "A security-focused project that demonstrates best practices in AWS network architecture. The implementation significantly reduces potential security risks through proper network segmentation.",
      technologies: ["Amazon VPC", "Security Groups", "Route Tables", "Network ACLs"],
      category: "security",
      icon: Shield,
      features: [
        "Network segmentation implementation",
        "75% reduction in lateral movement risk",
        "Isolated sensitive data segments",
        "Enhanced security posture"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'automation', label: 'Automation' },
    { id: 'security', label: 'Security' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world AWS projects demonstrating practical cloud engineering skills
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <project.icon className="text-blue-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;