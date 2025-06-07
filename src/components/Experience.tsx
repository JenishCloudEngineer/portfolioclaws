import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp, Shield, Zap, Database, Monitor } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Shield,
      title: "Network Security Enhancement",
      description: "Implemented network segmentation using subnets and route tables, isolating sensitive data within separate network segments and decreasing potential lateral movement by 75% in case of security breaches."
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Analyzed AWS billing and usage reports to configure budget alerts and identify underutilized resources, uncovering potential cost savings of up to 15%."
    },
    {
      icon: Zap,
      title: "Infrastructure Automation",
      description: "Built and reused infrastructure templates in practice projects to simulate Infrastructure as Code (IaC), improving deployment speed and reducing manual setup time by 40%."
    },
    {
      icon: Monitor,
      title: "Performance Monitoring",
      description: "Monitored instance health and activity using basic logging and metrics tools, gaining insight into troubleshooting and performance tracking."
    },
    {
      icon: Database,
      title: "Hands-on Learning",
      description: "Completed over 5 guided projects and hands-on labs to strengthen understanding of cloud architecture, security configurations, and deployment workflows."
    }
  ];

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
    <section id="experience" className="py-20">
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
                Experience & Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Practical experience gained through hands-on projects and real-world applications
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="flex items-center mb-6">
                <Briefcase className="text-blue-400 mr-4" size={28} />
                <div>
                  <h3 className="text-2xl font-semibold text-white">Fresher - AWS Cloud Engineer</h3>
                  <p className="text-gray-400">Self-Directed Learning & Projects</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Actively applying foundational AWS knowledge through practical projects and labs, completing over 3 real-world 
                use cases involving compute, storage, and networking. Currently focused on expanding skills in advanced areas 
                such as serverless (Lambda), container management with Amazon EKS, infrastructure automation using Terraform, 
                and securing cloud environments.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <achievement.icon className="text-blue-400 mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;