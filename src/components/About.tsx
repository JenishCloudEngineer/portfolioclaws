import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="about" className="py-20 bg-gray-900/50">
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
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dedicated AWS Cloud Engineer with a passion for building robust, scalable cloud infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-white">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                AWS Cloud Engineer with a clear understanding of how to deploy, configure, and manage cloud infrastructure. 
                Familiar with core concepts such as networking, security, scalability, high availability, and cost control. 
                Gaining practical experience in setting up and maintaining stable and efficient cloud environments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently focused on expanding skills in advanced areas such as serverless computing with Lambda, 
                container management with Amazon EKS, infrastructure automation using Terraform, and securing cloud environments.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-blue-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-white">Bachelor of Engineering - Computer Science</h5>
                    <p className="text-gray-400">Coimbatore Institute Of Engineering and Technology</p>
                    <p className="text-gray-500">CGPA: 6.67 | Expected: May 2025</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">High School</h5>
                    <p className="text-gray-400">Evangeline Matriculation Higher Secondary School</p>
                    <p className="text-gray-500">74% | April 2021</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <Award className="text-purple-400 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-white">Certifications</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">• NPTEL - Data Mining</p>
                  <p className="text-gray-300">• Scaler - Docker and Kubernetes Fundamentals</p>
                  <p className="text-gray-300">• Preparing for AWS Certified Cloud Practitioner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;