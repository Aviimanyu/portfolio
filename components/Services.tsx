'use client'

import { motion } from 'framer-motion'
import {
  HiGlobeAlt,
  HiCog6Tooth,
  HiMagnifyingGlass,
  HiLightBulb,
  HiBolt,
  HiSparkles,
} from 'react-icons/hi2'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'End-to-end web development using modern tech stacks. React, Next.js, Node.js, and databases.',
      icon: HiGlobeAlt,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions, theme development, plugin creation, and WooCommerce integration.',
      icon: HiCog6Tooth,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Technical SEO',
      description: 'Site structure optimization, Core Web Vitals, schema markup, and technical audits.',
      icon: HiMagnifyingGlass,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'Programmatic SEO',
      description: 'Automated SEO systems, AI-driven content generation, and scalable SEO infrastructure.',
      icon: HiLightBulb,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      title: 'Website Speed Optimization',
      description: 'Performance optimization, image compression, caching strategies, and Core Web Vitals improvement.',
      icon: HiBolt,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      title: 'AI SEO Systems',
      description: 'AI-powered SEO solutions, automated keyword research, content generation, and competitor analysis.',
      icon: HiSparkles,
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            I offer a comprehensive suite of services to help your business grow online
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-xl group cursor-pointer transition-all duration-300 hover:border-accent/50"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
