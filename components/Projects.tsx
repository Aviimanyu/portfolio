'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MarioGamers',
      description: 'HTML5 browser game inspired by Super Mario with modern gameplay mechanics.',
      url: 'https://mariogamers.com',
      tags: ['HTML5', 'JavaScript', 'CSS'],
      featured: true,
    },
    {
      id: 2,
      title: 'WeightLossPercentage',
      description: 'Online percentage and health calculator platform optimized for SEO with high-value keywords.',
      url: 'https://weightlosspercentage.com',
      tags: ['React', 'Vite', 'SEO'],
      featured: true,
    },
    {
      id: 3,
      title: 'IAVI Fitness',
      description: 'Fitness and health business website with complete SEO optimization and lead generation.',
      url: 'https://iavifitness.com',
      tags: ['WordPress', 'SEO', 'Conversion'],
      featured: true,
    },
    {
      id: 4,
      title: 'NewsTrendey',
      description: 'Content publishing platform with Next.js frontend and headless WordPress backend.',
      url: 'https://newstrendey.com',
      tags: ['Next.js', 'GraphQL', 'WordPress'],
      featured: true,
    },
    {
      id: 5,
      title: 'JPG Converter Tool',
      description: 'Free image conversion utility with optimized performance and user-friendly interface.',
      url: 'https://jpgconvertertool.com',
      tags: ['React', 'WebAssembly', 'Performance'],
    },
    {
      id: 6,
      title: 'ASSS Construction',
      description: 'Business website for construction company with local SEO and service showcase.',
      url: 'https://asssconstruction.com',
      tags: ['WordPress', 'Local SEO', 'Business'],
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A selection of projects I&apos;ve built, from games to SEO platforms

          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group glass rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-accent/50"
            >
              {/* Card Content */}
              <div className="p-8 h-full flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-accent font-medium hover:space-x-3 transition-all duration-300 self-start"
                >
                  <span>Visit Project</span>
                  <HiArrowTopRightOnSquare className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-4">Want to see more projects?</p>
          <Link
            href="https://github.com/Aviimanyu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-secondary"
          >
            <span>View on GitHub</span>
            <HiArrowTopRightOnSquare className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
