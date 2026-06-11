'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiEnvelope } from 'react-icons/hi2'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center sm:justify-start">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass hover:glass-hover cursor-pointer transition-all">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-text-secondary">Open for collaborations</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Full Stack Developer &
              <span className="block gradient-text"> SEO Consultant</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl"
          >
            I build fast websites, scalable full-stack systems, and SEO-driven platforms for startups and businesses. Creating digital experiences for 6+ years.
          </motion.p>

          {/* Bio Highlight */}
          <motion.div
            variants={itemVariants}
            className="glass p-4 rounded-lg border-l-4 border-accent"
          >
            <p className="text-text-secondary text-sm sm:text-base">
              Specialized in WordPress, Next.js, PHP, performance optimization, technical SEO, and scalable web solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <Link
              href="#projects"
              className="btn-primary inline-flex items-center justify-center space-x-2 group"
            >
              <span>View Projects</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://calendly.com/abhimanyucoder88"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center space-x-2 group"
            >
              <span>30 Minutes Free Consultancy</span>
            </a>

            <a
              href="https://calendly.com/abhimanyucoder88"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center space-x-2 group"
            >
              <span>Book a Call</span>
            </a>

            <a
              href="https://wa.me/919971055356?text=Hi%20Abhimanyu%2C%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center space-x-2 group"
            >
              <span>WhatsApp</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-border"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent">6+</p>
              <p className="text-sm text-text-secondary mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent">50+</p>
              <p className="text-sm text-text-secondary mt-2">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-text-secondary mt-2">Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
