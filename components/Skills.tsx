'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'PHP', 'Express', 'APIs', 'Databases', 'Authentication'],
    },
    {
      category: 'CMS & Tools',
      skills: ['WordPress', 'Shopify', 'WooCommerce', 'Webflow', 'Strapi', 'Headless CMS'],
    },
    {
      category: 'SEO',
      skills: ['Technical SEO', 'Programmatic SEO', 'On-page SEO', 'Link Building', 'Analytics', 'Schema Markup'],
    },
    {
      category: 'DevOps & Hosting',
      skills: ['GitHub', 'Cloudflare', 'Netlify', 'Vercel', 'AWS', 'Docker'],
    },
    {
      category: 'Other Skills',
      skills: ['Performance Optimization', 'UI/UX Design', 'Content Strategy', 'Project Management'],
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Technologies and tools I&apos;ve mastered over 6 years of development

          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-blue-400"></div>
                    <span className="text-text-secondary">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Languages', value: '8+' },
            { label: 'Frameworks', value: '12+' },
            { label: 'Tools', value: '15+' },
            { label: 'Certifications', value: '5+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl text-center"
            >
              <p className="text-2xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
