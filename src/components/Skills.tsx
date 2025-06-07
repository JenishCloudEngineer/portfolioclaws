import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Code, Database, Settings, Shield, Zap } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Cloud,
      title: "AWS Core Services",
      skills: [
        "Amazon EC2",
        "Amazon S3",
        "AWS Lambda",
        "AWS IAM",
        "Amazon VPC",
        "Amazon CloudFront",
        "AWS CLI",
        "CloudWatch"
      ]
    },
    {
      icon: Settings,
      title: "Infrastructure & Deployment",
      skills: [
        "Static Website Hosting",
        "CloudFront Distributions",
        "EC2 Launch Templates",
        "Regions & Availability Zones",
        "Auto Scaling concepts",
        "Deployment automation"
      ]
    },
    {
      icon: Zap,
      title: "Automation & CI/CD",
      skills: [
        "AWS CodePipeline (basic)",
        "AWS CodeDeploy (basic)",
        "Infrastructure as Code",
        "Terraform (learning)",
        "Docker (basic)",
        "Kubernetes (basic)"
      ]
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      skills: [
        "IAM Policies",
        "Security Groups",
        "Network Segmentation",
        "CloudWatch Monitoring",
        "Cost Optimization",
        "Performance Tracking"
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        "C",
        "Java",
        "Python",
        "MySQL",
        "JavaScript (basic)",
        "Shell Scripting"
      ]
    },
    {
      icon: Database,
      title: "Other Skills",
      skills: [
        "Video Editing",
        "Adobe Premiere Pro",
        "Team Collaboration",
        "Communication",
        "Problem Solving",
        "Documentation"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-gray-900/50">
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
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive skill set in cloud technologies, programming, and modern development practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="text-blue-400 mr-3" size={28} />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 * skillIndex }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;